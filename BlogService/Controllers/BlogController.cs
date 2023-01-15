using AutoMapper;
using BlogService.Dtos;
using BlogService.Repositories.Interfaces;
using BlogService.SyncDataServices.Http;
using CloudComputing.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudComputing.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly IBlogRepository _repository;
        private readonly IMapper _mapper;
        private readonly INewspaperDataClient _newspaperDataClient;

        public BlogController(
            IBlogRepository repository,
            IMapper mapper,
            INewspaperDataClient newspaperDataClient)
        {
            _repository = repository;
            _mapper = mapper;
            _newspaperDataClient = newspaperDataClient;
        }

        // GET: BlogController
        [HttpGet]
        public ActionResult<IEnumerable<BlogReadDto>> Index()
        {
            var blogs = _repository.GetAll();

            return Ok(_mapper.Map<IEnumerable<BlogReadDto>>(blogs));
        }

        // GET: BlogController/Details/5
        [HttpGet("{id}", Name = "GetBlogById")]
        public ActionResult<BlogReadDto> GetBlogById(int id)
        {
            var blog = _repository.GetById(id);
            if (blog != null)
            {
                return Ok(_mapper.Map<BlogReadDto>(blog));
            }

            return NotFound();
        }

        // POST: BlogController/Create
        [HttpPost]
        public async Task<ActionResult<BlogReadDto>> Create(BlogCreateDto blogCreateDto)
        {
            var blogModel = _mapper.Map<Blog>(blogCreateDto);
            _repository.Create(blogModel);
            _repository.Save();

            var blogReadDto = _mapper.Map<BlogReadDto>(blogModel);

            try
            {
                await _newspaperDataClient.SendBlogToNewspaper(blogReadDto);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"--> Error SendBlogToNewspaper: {ex.Message}");
            }

            return CreatedAtRoute(nameof(GetBlogById), new { Id = blogReadDto.Id }, blogReadDto);
        }
    }
}

