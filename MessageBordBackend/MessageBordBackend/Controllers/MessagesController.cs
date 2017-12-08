using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MessageBordBackend.Persistence;

namespace MessageBordBackend.Controllers
{

    [Produces("application/json")]
    [Route("api/Messages")]
    public class MessagesController : Controller
    {

        private readonly MessageDbContext MessageDbContext;

        public MessagesController(MessageDbContext messageDbContext)
        {
            this.MessageDbContext = messageDbContext;
        }
        
        //IEnumerable is help to pass a array
        public IEnumerable<Models.Message> Get()
        {
            return MessageDbContext.Messages;            
        }
        [HttpGet("{name}")]
        public IEnumerable<Models.Message> Get(string name)
        {
            return MessageDbContext.Messages
                .Where(massage => massage.Owner == name);
        }

        [HttpPost]
        public Models.Message Post([FromBody] Models.Message message)
        {
            var dbMessage = MessageDbContext.Messages.Add(message).Entity;
            MessageDbContext.SaveChanges();
            return dbMessage;
        }

    }
}