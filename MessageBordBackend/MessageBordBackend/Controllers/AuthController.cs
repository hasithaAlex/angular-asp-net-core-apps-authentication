using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using MessageBordBackend.Persistence;

namespace MessageBordBackend.Controllers
{
    public class JwtPacket
    { 
        public string Token { get; set; }
        public string FirstName { get; set; }
    }

    [Produces("application/json")]
    [Route("auth")]
    public class AuthController : Controller
    {
        private readonly MessageDbContext MessageDbContext;

        public AuthController(MessageDbContext messageDbContext)
        {
            this.MessageDbContext = messageDbContext;
        }

        [HttpPost("register")]
        public JwtPacket Register([FromBody]Models.User user)
        {
            var jwt = new JwtSecurityToken();
            var encodedJwt = new JwtSecurityTokenHandler()
                .WriteToken(jwt);

            MessageDbContext.Users.Add(user);
            MessageDbContext.SaveChanges();

            return new JwtPacket () {
                Token = encodedJwt,
                FirstName = user.FirstName    
            };
        }
    }
}