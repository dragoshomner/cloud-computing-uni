using AutoMapper;
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
    [Route("api/newspaper")]
    [ApiController]
    public class NewspaperController : ControllerBase
    {
        private readonly INewspaperRepository _repository;
        private readonly IMapper _mapper;

        public NewspaperController(INewspaperRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet("all")]
        public ActionResult<IEnumerable<NewspaperReadDto>> GetNewspapers()
        {
            var newspapers = _repository.GetAllNewspapers();

            return Ok(_mapper.Map<IEnumerable<NewspaperReadDto>>(newspapers));
        }


        [HttpPost]
        public ActionResult<NewspaperReadDto> CreateNewspaper(NewspaperCreateDto newspaperCreateDto)
        {
            var newspaper = _mapper.Map<Newspaper>(newspaperCreateDto);

            _repository.CreateNewspaper(newspaper);
            _repository.SaveChanges();

            var newspaperReadDto = _mapper.Map<NewspaperReadDto>(newspaper);

            return Ok(newspaperReadDto);
        }
    }
}
