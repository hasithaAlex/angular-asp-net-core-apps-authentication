using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MessageBordBackend.Models
{
    [Table("Messages")]
    public class Message
    {
        public int Id { get; set; }

        [Required]
        public string Owner { get; set; }

        [Required]
        [StringLength(255)]
        public string Text { get; set; }
    }
}
