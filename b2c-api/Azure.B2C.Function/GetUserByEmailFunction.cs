using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.Azure.WebJobs.Host;
using System.Threading;

using static Azure.B2C.Function.Procedures.CertValidation;
using Azure.B2C.Infrastructure.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Azure.B2C.Function
{
    public class GetUserByEmailFunction
    {
        private readonly IMyDbContext _context;
        private readonly ILogger<GetUserByEmailFunction> _log;

        public GetUserByEmailFunction(IMyDbContext context, ILogger<GetUserByEmailFunction> log)
        {
            _context = context;
            _log = log;
        }

        [FunctionName("GetUserByEmail")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req)
        {
            var certHeader = req.Headers["X-ARR-ClientCert"];

            _log.LogInformation($"X-ARR-ClientCert: {certHeader}");

            if (ClientCertIsValid(certHeader))
            {
                string email = req.Query["email"];

                string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
                dynamic data = JsonConvert.DeserializeObject(requestBody);
                email = email ?? data?.email;

                _log.LogInformation($"email: {email}");

                if (email != null)
                {
                    var user = await _context.User
                        .AsNoTracking()
                        .FirstOrDefaultAsync(f => f.Email == email);

                    return new OkObjectResult(user);
                }
                else
                {
                    _log.LogInformation("Email is null");
                    return new BadRequestResult();
                }
            }
            else
            {
                _log.LogInformation("Unauthorized");
                return new UnauthorizedResult();
            }
        }

        [Obsolete]
        public Task OnExceptionAsync(FunctionExceptionContext exceptionContext, CancellationToken cancellationToken)
        {
            _log.LogError($"Exception raised by the application {exceptionContext.Exception.ToString()}");
            return Task.CompletedTask;
        }
    }
}
