using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SubscribeService.Data;
using SubscribeService.Dtos;
using SubscribeService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudComputing.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscribeController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public SubscribeController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // POST: SubscribeController/Create
        [HttpPost]
        public async Task<ActionResult<bool>> Create(CreateSubscriptionDto subsciptionCreateDto)
        {
            var subscriptionModel = _mapper.Map<Subscription>(subsciptionCreateDto);
            _context.Subscriptions.Add(subscriptionModel);
            return (_context.SaveChanges() >= 0);
        }
    }
}

