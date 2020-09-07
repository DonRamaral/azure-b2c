using System;
using System.Security.Cryptography.X509Certificates;
using Azure.B2C.Api.Modeles;
using Azure.B2C.Api.Models;
using Azure.B2C.Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace Azure.B2C.Api.Controllers
{
    [ApiController]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class OidcController : Controller
    {
        private static Lazy<X509SigningCredentials> _signingCredentials;
        private readonly B2CSettings _b2CSettings;

        // Inject an instance of an AppSettingsModel class into the constructor of the consuming class, 
        // and let dependency injection handle the rest
        public OidcController(IOptions<B2CSettings> b2cSettings)
        {
            _b2CSettings = b2cSettings.Value;

            // Sample: Load the certificate with a private key (must be pfx file)
            _signingCredentials = new Lazy<X509SigningCredentials>(() =>
            {

                X509Store certStore = new X509Store(StoreName.My, StoreLocation.CurrentUser);
                certStore.Open(OpenFlags.ReadOnly);
                X509Certificate2Collection certCollection = certStore.Certificates.Find(
                                            X509FindType.FindByThumbprint,
                                            _b2CSettings.SigningCertThumbprint,
                                            false);
                // Get the first cert with the thumb-print
                if (certCollection.Count > 0)
                {
                    return new X509SigningCredentials(certCollection[0]);
                }

                throw new Exception("Certificate not found");
            });
        }

        [Route(".well-known/openid-configuration", Name = "OIDCMetadata")]
        public ActionResult Metadata()
        {
            return Content(JsonConvert.SerializeObject(new Oidc
            {
                Issuer = _b2CSettings.Issuer,

                // Include the absolute URL to JWKs endpoint
                JwksUri = _b2CSettings.JwksUri, //Url.Link("JWKS", null),

                // Include the supported signing algorithms
                IdTokenSigningAlgValuesSupported = new[] { _signingCredentials.Value.Algorithm },
            }), "application/json");
        }

        [Route(".well-known/keys", Name = "JWKS")]
        public ActionResult JwksDocument()
        {
            return Content(JsonConvert.SerializeObject(new Jwks
            {
                Keys = new[] { JwksKey.FromSigningCredentials(_signingCredentials.Value) }
            }), "application/json");
        }
    }
}
