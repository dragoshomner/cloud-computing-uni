using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogService.Dtos
{
    public class BlogReadDto
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Content { get; set; }

        public string ImageUrl { get; set; }

        public int NumberOfLikes { get; set; } = 0;

        public int NumberOfViews { get; set; } = 0;

        public int NumberOfShares { get; set; } = 0;
    }
}
