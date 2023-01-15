using AutoMapper;
using SubscribeService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SubscribeService.Dtos
{
    public class SubscriptionProfile : Profile
    {
        public SubscriptionProfile()
        {
            CreateMap<CreateSubscriptionDto, Subscription>();
        }
    }
}
