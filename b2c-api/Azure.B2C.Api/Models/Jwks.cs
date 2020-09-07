using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Azure.B2C.Api.Modeles
{
    public class Jwks
    {
        [JsonProperty("keys")]
        public ICollection<JwksKey> Keys { get; set; }
    }
}
