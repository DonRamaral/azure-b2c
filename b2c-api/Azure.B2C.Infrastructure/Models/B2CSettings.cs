using System;
using System.Collections.Generic;
using System.Text;

namespace Azure.B2C.Infrastructure.Models
{
    public class B2CSettings
    {
        public string B2CTenant { get; set; }
        public string B2CPolicy { get; set; }
        public string B2CClientId { get; set; }
        public string B2CRedirectUri { get; set; }
        public string B2CSignUpUrl { get; set; }
        public string Authority { get; set; }
        public string Issuer { get; set; }
        public string JwksUri { get; set; }
        public string SigningCertThumbprint { get; set; }
        public int LinkExpiresAfterMinutes { get; set; }
    }
}
