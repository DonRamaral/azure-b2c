using System;
using System.Collections.Generic;
using System.Text;

namespace Azure.B2C.Infrastructure.Persistence.Entities
{
    public class User
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public bool IsInternalUser { get; set; }
        public bool IsActive { get; set; }
        public string InvitationUrl { get; set; }
    }
}
