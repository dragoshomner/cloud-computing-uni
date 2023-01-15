using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NewspaperService.Models
{
    public class Newspaper
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Owner { get; set; }

        [Required]
        public int YearOfRelease { get; set; }

        public ICollection<Blog> Blogs { get; set; } = new List<Blog>();
    }
}
