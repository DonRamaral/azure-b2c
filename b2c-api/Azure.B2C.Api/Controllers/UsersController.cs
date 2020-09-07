using Azure.B2C.Api.Models;
using Azure.B2C.Infrastructure.Interfaces;
using Azure.B2C.Infrastructure.Persistence.Entities;
using Azure.B2C.Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Azure.B2C.Api.Filters;

namespace Azure.B2C.Api.Controllers
{
    [Authorize]
    [Route("api/v1/[controller]")]
    public class UsersController : Controller
    {
        private readonly IMyDbContext _context;
        private readonly ICreateExternalUserInvitationUrl _invitationUrl;

        public UsersController(IMyDbContext context, ICreateExternalUserInvitationUrl invitationUrl)
        {
            _context = context;
            _invitationUrl = invitationUrl;
        }

        [HttpGet]
        [IsInternalUserFilter]
        public async Task<IActionResult> ListUsers([FromQuery] int limit = 10, [FromQuery] int offset = 0)
        {
            var users = await _context.User
                         .AsNoTracking()
                         .Skip(offset)
                         .Take(limit)
                         .Select(s => new ListUser() { 
                            UserId = s.UserId,
                            FirstName = s.FirstName,
                            LastName = s.LastName,
                            Email = s.Email,
                            IsActive = s.IsActive,
                            IsInternalUser = s.IsInternalUser,
                            InvitationUrl = s.InvitationUrl
                         })
                         .ToListAsync();

            var total = await _context.User.AsNoTracking().CountAsync();

            var viewModel = new { CallBack = new { Users = users, Total = total } };

            return Ok(viewModel);
        }

        [HttpPost]
        [IsInternalUserFilter]
        public async Task<IActionResult> InsertUser([FromBody] InsertUser user)
        {
            var entity = new User() 
            { 
                FirstName = user.FirstName, 
                LastName = user.LastName, 
                Email = user.Email, 
                IsActive = user.IsActive,
                IsInternalUser = user.IsInternalUser,
            };

            entity.InvitationUrl = !user.IsInternalUser ? _invitationUrl.CreateInvittionUrl(entity) : string.Empty;

            _context.User.Add(entity);

            await _context.SaveChangesAsync(new CancellationToken());

            return Ok();
        }
    }
}
