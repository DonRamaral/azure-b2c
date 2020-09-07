using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Linq;
using System.Threading.Tasks;

namespace Azure.B2C.Api.Filters
{
    public class IsInternalUserFilter : ActionFilterAttribute
    {
        public override async Task OnActionExecutionAsync(
                    ActionExecutingContext context,
                    ActionExecutionDelegate next)
        {
            var internalUserClaim = context.HttpContext.User.Claims.FirstOrDefault(w => w.Type == "internalUser");
            if (bool.TryParse(internalUserClaim.Value, out bool internalUser))
                if (internalUser)
                    await next();

            context.Result = new ObjectResult(null)
            {
                StatusCode = 401
            };
        }
    }
}
