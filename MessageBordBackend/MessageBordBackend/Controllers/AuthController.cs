using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;

namespace MessageBordBackend.Controllers
{


    public class JwtPacket
    { 
        public string Token { get; set; }
    }

    [Produces("application/json")]
    [Route("auth")]
    public class AuthController : Controller
    {
        [HttpPost("register")]
        public JwtPacket Register([FromBody]Models.User user)
        {
            var jwt = new JwtSecurityToken();
            var encodedJwt = new JwtSecurityTokenHandler()
                .WriteToken(jwt);

            return new JwtPacket () { Token = encodedJwt };
        }
    }
}