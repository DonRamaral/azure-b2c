using Azure.B2C.Infrastructure.Persistence.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Azure.B2C.Infrastructure.Interfaces
{
    public interface IMyDbContext
    {
        DbSet<User> User { get; set; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
