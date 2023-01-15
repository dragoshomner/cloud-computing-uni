using AutoMapper;
using ContactService.Data;
using ContactService.Dtos;
using ContactService.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public ContactController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // POST: SubscribeController/Create
        [HttpPost]
        public async Task<ActionResult<bool>> Create(CreateContactDto contactCreateDto)
        {
            var contactModel = _mapper.Map<Contact>(contactCreateDto);
            _context.Contacts.Add(contactModel);
            return (_context.SaveChanges() >= 0);
        }
    }
}
