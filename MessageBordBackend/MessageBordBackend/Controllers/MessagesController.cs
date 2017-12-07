using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MessageBordBackend.Controllers
{

    [Produces("application/json")]
    [Route("api/Messages")]
    public class MessagesController : Controller
    {
        static List<Models.Message> massages = new List<Models.Message> {
                new Models.Message{
                    Owner = "Hasitha",
                    Text = "hello"
                },
                new Models.Message{
                    Owner = "John",
                    Text = "hello"
                }
            };

        //IEnumerable is help to pass a array
        public IEnumerable<Models.Message> Get()
        {
            return massages;            
        }
        [HttpGet("{name}")]
        public IEnumerable<Models.Message> Get(string name)
        {
            return massages.FindAll(massage => massage.Owner == name);
        }

        [HttpPost]
        public Models.Message Post([FromBody] Models.Message message)
        {
            massages.Add(message);
            return message;
        }

    }
}