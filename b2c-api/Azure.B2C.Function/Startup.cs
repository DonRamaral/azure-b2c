using Azure.B2C.Infrastructure.Interfaces;
using Azure.B2C.Infrastructure.Persistence;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.Build.Utilities;

[assembly: FunctionsStartup(typeof(Azure.B2C.Function.Startup))]

namespace Azure.B2C.Function
{
    public class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            var connectionString = Environment.GetEnvironmentVariable("SQLCONNSTR_MyDb");
            builder.Services.AddDbContext<IMyDbContext, MyDbContext>(options =>
                SqlServerDbContextOptionsExtensions.UseSqlServer(options, connectionString));

            builder.Services.AddSingleton<ILogger<GetUserByEmailFunction>, Logger<GetUserByEmailFunction>>();
        }
    }
}
