using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using MessageBordBackend.Persistence;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;

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
            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("this is the secret phrase"));
            var signingCredentiols = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);
            var claims = new Claim[] 
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString())
            };
            var jwt = new JwtSecurityToken(claims: claims,signingCredentials: signingCredentiols);
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