using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MessageBordBackend.Persistence;
using Microsoft.AspNetCore.Authorization;

namespace MessageBordBackend.Controllers
{
    public class EditProfileData
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }

    [Produces("application/json")]
    [Route("api/Users")]
    public class UserController : Controller
    {
        private readonly MessageDbContext MessageDbContext;

        public UserController(MessageDbContext messageDbContext)
        {
            this.MessageDbContext = messageDbContext;
        }

        [HttpGet("{id}")]
        public ActionResult Get(string id)
        {
            var users = (from user in MessageDbContext.Users
                         where user.Id == Convert.ToInt32(id)
                         select user).FirstOrDefault();


            if (users == null)
                return NotFound("user Not found");

            return Ok(users);
        }

        [Authorize]
        [HttpGet("me")]
        public ActionResult Get()
        {
            return Ok(GetSecureUser());
        }


        [Authorize]
        [HttpPost("me")]
        public ActionResult Post([FromBody] EditProfileData profileData)
        {
            var user = GetSecureUser();

            user.FirstName = profileData.FirstName ?? user.FirstName;
            user.LastName = profileData.LastName ?? user.LastName;

            MessageDbContext.SaveChanges();

            return Ok(user);
        }


        Models.User GetSecureUser()
        {
            var id = HttpContext.User.Claims.First().Value;
            return MessageDbContext.Users.SingleOrDefault(u => u.Id == Convert.ToInt32(id));
        }
    }
}