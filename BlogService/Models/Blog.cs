using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CloudComputing.Models
{
    public class Blog
    {
        [Key]
        [Required]
        public int Id { get; set; }
        
        public bool IsPublic { get; set; } = true;
        
        [Required]
        public string Title { get; set; }

        [Required]
        public string Content { get; set; }

        public string ImageUrl { get; set; }

        public int NumberOfLikes { get; set; } = 0;

        public int NumberOfViews { get; set; } = 0;

        public int NumberOfShares { get; set; } = 0;
    }
}
