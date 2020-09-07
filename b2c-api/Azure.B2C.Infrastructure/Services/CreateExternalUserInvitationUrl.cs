using Microsoft.Extensions.Options;
using System.Security.Cryptography.X509Certificates;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Azure.B2C.Infrastructure.Models;
using System.IdentityModel.Tokens.Jwt;
using Azure.B2C.Infrastructure.Persistence.Entities;
using Azure.B2C.Infrastructure.Interfaces;

namespace Azure.B2C.Infrastructure.Services
{
    public class CreateExternalUserInvitationUrl : ICreateExternalUserInvitationUrl
    { 
        private readonly Lazy<X509SigningCredentials> _signingCredentials;
        private readonly B2CSettings _b2CSettings;

        public CreateExternalUserInvitationUrl(IOptions<B2CSettings> b2cSettings)
        {
            _b2CSettings = b2cSettings.Value;

            #region .: Load Certificate :.

            _signingCredentials = new Lazy<X509SigningCredentials>(() =>
            {

                X509Store certStore = new X509Store(StoreName.My, StoreLocation.CurrentUser);
                certStore.Open(OpenFlags.ReadOnly);
                X509Certificate2Collection certCollection = certStore.Certificates.Find(
                                            X509FindType.FindByThumbprint,
                                            _b2CSettings.SigningCertThumbprint,
                                            false);

                if (certCollection.Count > 0)
                {
                    return new X509SigningCredentials(certCollection[0]);
                }

                throw new Exception("Certificate not found");
            });

            #endregion
        }

        protected string BuildTokenHint(string firstName, string lastName, string email)
        {
            IList<System.Security.Claims.Claim> claims = new List<System.Security.Claims.Claim>
            {
                new System.Security.Claims.Claim("firstName", firstName, System.Security.Claims.ClaimValueTypes.String, _b2CSettings.Issuer),
                new System.Security.Claims.Claim("lastName", lastName, System.Security.Claims.ClaimValueTypes.String, _b2CSettings.Issuer),
                new System.Security.Claims.Claim("email", email, System.Security.Claims.ClaimValueTypes.String, _b2CSettings.Issuer)
            };

            JwtSecurityToken token = new JwtSecurityToken(
                    _b2CSettings.Issuer,
                    _b2CSettings.B2CClientId,
                    claims,
                    DateTime.Now,
                    DateTime.Now.AddMinutes(_b2CSettings.LinkExpiresAfterMinutes),
                    _signingCredentials.Value);

            JwtSecurityTokenHandler jwtHandler = new JwtSecurityTokenHandler();
            return jwtHandler.WriteToken(token);
        }

        public string CreateInvittionUrl(User user)
        {
            var nonce = Guid.NewGuid().ToString("n");
            var tokenHint = BuildTokenHint(user.FirstName, user.LastName, user.Email); 

            return string.Format(_b2CSettings.B2CSignUpUrl,
                                 _b2CSettings.B2CTenant,
                                 _b2CSettings.B2CPolicy,
                                 _b2CSettings.B2CClientId,
                                Uri.EscapeDataString(_b2CSettings.B2CRedirectUri),
                                nonce) + "&id_token_hint=" + tokenHint;
        }
    }
}
