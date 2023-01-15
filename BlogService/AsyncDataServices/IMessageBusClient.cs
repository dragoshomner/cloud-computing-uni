using BlogService.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogService.AsyncDataServices
{
    public interface IMessageBusClient
    {
        void PublishNewBlog(BlogPublishedDto blogPublishedDto);
    }
}
