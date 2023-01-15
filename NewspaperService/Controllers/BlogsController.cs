using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NewspaperService.Data;
using NewspaperService.Dtos;
using NewspaperService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewspaperService.Controllers
{
    [Route("api/newspaper/{newspaperId}/[controller]")]
    [ApiController]
    public class BlogsController : ControllerBase
    {
        private readonly INewspaperRepository _repository;
        private readonly IMapper _mapper;

        public BlogsController(INewspaperRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<BlogReadDto>> GetBlogsForNewspaper(int newspaperId)
        {
            if (!_repository.NewspaperExits(newspaperId))
            {
                return NotFound();
            }

            var blogs = _repository.GetBlogsForNewspaper(newspaperId);

            return Ok(_mapper.Map<IEnumerable<BlogReadDto>>(blogs));
        }

        [HttpGet("{blogId}", Name = "GetBlogForNewspaper")]
        public ActionResult<BlogReadDto> GetBlogForNewspaper(int newspaperId, int blogId)
        {
            if (!_repository.NewspaperExits(newspaperId))
            {
                return NotFound();
            }

            var blog = _repository.GetBlog(newspaperId, blogId);

            if (blog == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<BlogReadDto>(blog));
        }

        [HttpPost]
        public ActionResult<BlogReadDto> CreateBlogForNewspaper(int newspaperId, BlogCreateDto blogDto)
        {
            if (!_repository.NewspaperExits(newspaperId))
            {
                return NotFound();
            }

            var blog = _mapper.Map<Blog>(blogDto);

            _repository.CreateBlog(newspaperId, blog);
            _repository.SaveChanges();

            var blogReadDto = _mapper.Map<BlogReadDto>(blog);

            return CreatedAtRoute(nameof(GetBlogForNewspaper),
                new { newspaperId = newspaperId, blogId = blogReadDto.Id }, blogReadDto);
        }
    }
}
