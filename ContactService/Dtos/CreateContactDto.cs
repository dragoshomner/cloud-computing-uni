using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactService.Dtos
{
    public class CreateContactDto
    {
        public string Email { get; set; }

        public string Message { get; set; }
    }
}
