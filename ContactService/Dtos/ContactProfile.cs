using AutoMapper;
using ContactService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactService.Dtos
{
    public class ContactProfile : Profile
    {
        public ContactProfile()
        {
            CreateMap<CreateContactDto, Contact>();
        }
    }
}
