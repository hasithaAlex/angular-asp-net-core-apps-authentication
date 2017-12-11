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

    public class LoginData
    {
        public string Email { get; set; }
        public string Password { get; set; }
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

        [HttpPost("login")]
        public ActionResult Login([FromBody]LoginData loginData)
        {
          
            var users = (from user in MessageDbContext.Users
                             where user.Password == loginData.Password && user.Password == loginData.Password
                             select user).FirstOrDefault();
            

            if (users == null)
            {
                return NotFound("email or password incorrect");
            }

            return Ok(CreatejwtPacket((Models.User)users));
        }

        [HttpPost("register")]
        public JwtPacket Register([FromBody]Models.User user)
        {
            
            MessageDbContext.Users.Add(user);
            MessageDbContext.SaveChanges();

            return CreatejwtPacket(user);
        }

        JwtPacket CreatejwtPacket(Models.User user)
        {
            var jwt = new JwtSecurityToken();
            var encodedJwt = new JwtSecurityTokenHandler()
                .WriteToken(jwt);
            return new JwtPacket()
            {
                Token = encodedJwt,
                FirstName = user.FirstName
            };
        }

    }
}