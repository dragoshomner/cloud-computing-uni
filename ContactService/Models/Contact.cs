using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContactService.Models
{
    public class Contact
    {
        [Key]
        [Required]
        public int Id { get; set; }

        public string Email { get; set; }

        public string Message { get; set; }
    }
}
