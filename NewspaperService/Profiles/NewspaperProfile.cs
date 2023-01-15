using AutoMapper;
using NewspaperService.Dtos;
using NewspaperService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewspaperService.Profiles
{
    public class NewspaperProfile : Profile
    {
        public NewspaperProfile()
        {
            // Source -> Target
            CreateMap<Newspaper, NewspaperReadDto>();
            CreateMap<NewspaperCreateDto, Newspaper>();
            CreateMap<BlogCreateDto, Blog>();
            CreateMap<Blog, BlogReadDto>();
        }
    }
}
