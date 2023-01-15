using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewspaperService.Dtos
{
    public class NewspaperReadDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Owner { get; set; }

        public int YearOfRelease { get; set; }
    }
}
