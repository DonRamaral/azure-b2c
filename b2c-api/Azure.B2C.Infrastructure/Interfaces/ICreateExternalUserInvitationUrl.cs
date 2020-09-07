using Azure.B2C.Infrastructure.Persistence.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Azure.B2C.Infrastructure.Interfaces
{
    public interface ICreateExternalUserInvitationUrl
    {
        string CreateInvittionUrl(User user);
    }
}
