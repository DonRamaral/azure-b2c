using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Azure.B2C.Api.Models
{
    public class InsertUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public bool IsInternalUser { get; set; }
        public bool IsActive { get; set; }
    }
}
