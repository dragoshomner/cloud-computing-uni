using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BlogService.Dtos;
using CloudComputing.Models;

namespace BlogService.Profiles
{
    public class BlogProfile : Profile
    {
        public BlogProfile()
        {
            CreateMap<Blog, BlogReadDto>();
            CreateMap<BlogCreateDto, Blog>();
        }
    }
}
