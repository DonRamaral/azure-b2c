using Azure.B2C.Api.Models;
using Azure.B2C.Infrastructure.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;

namespace Azure.B2C.Api.Extensions
{
    public static class AzureB2CAuthentication
    {
        public static void AddAzureB2CAuthentication(this IServiceCollection services, B2CSettings b2cSettings)
        {
            services.AddAuthentication(options =>
            {
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(jwtOptions =>
            {
                jwtOptions.Authority = string.Format(b2cSettings.Authority,
                    b2cSettings.B2CTenant,
                    b2cSettings.B2CPolicy);
                jwtOptions.Audience = b2cSettings.B2CClientId;
            });
        }
    }
}
