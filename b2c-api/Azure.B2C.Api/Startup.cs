using Azure.B2C.Api.Extensions;
using Azure.B2C.Api.Models;
using Azure.B2C.Infrastructure.Interfaces;
using Azure.B2C.Infrastructure.Models;
using Azure.B2C.Infrastructure.Persistence;
using Azure.B2C.Infrastructure.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;

namespace Azure.B2C.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        private IConfiguration Configuration { get; }
        private string CorsPolicy { get; } = "allow-specific-origin";
        private string[] ApplicationHeaders { get; } = { "Authorization", "Content-Type" };
        private string[] ApplicationMethods { get; } = { "GET" };


        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            // Add DbContext using SQL Server Provider
            var connectionString = Environment.GetEnvironmentVariable("SQLCONNSTR_MyDb");
            services.AddDbContext<IMyDbContext, MyDbContext>(options =>
                options.UseSqlServer(connectionString));

            services.Configure<B2CSettings>(Configuration.GetSection("B2CSettings"));

            services.AddAzureB2CAuthentication(Configuration.GetSection("B2CSettings").Get<B2CSettings>());

            services.AddScoped<ICreateExternalUserInvitationUrl, CreateExternalUserInvitationUrl>();

            // Cross Origin Resource Sharing (CORS)
            services.AddCors(options =>
            {
                options.AddPolicy(CorsPolicy, builder =>
                {
                    builder
                        .WithOrigins(Configuration["AllowedOrigin"])
                        .WithHeaders(ApplicationHeaders)
                        .WithMethods(ApplicationMethods);
                });
            });

            services.AddControllers();

            // Register the Swagger generator, defining 1 or more Swagger documents
            services.AddSwaggerGen();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Azure B2C API");
                c.RoutePrefix = string.Empty;
            });

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseCors(CorsPolicy);

            app.UseEndpoints(endpoints => {
                endpoints.MapControllers();
            });
        }
    }
}
