using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using NewspaperService.Data;
using NewspaperService.Dtos;
using NewspaperService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace NewspaperService.EventProcessing
{
    public class EventProcessor : IEventProcessor
    {
        private readonly IServiceScopeFactory _scopeFactory;
        private readonly IMapper _mapper;

        public EventProcessor(IServiceScopeFactory scopeFactory, IMapper mapper)
        {
            _scopeFactory = scopeFactory;
            _mapper = mapper;
        }

        public void ProcessEvent(string message)
        {
            var eventType = DetermineEvent(message);

            switch (eventType)
            {
                case EventType.BlogPublished:
                    addBlog(message);
                    break;
                default:
                    break;
            }
        }

        private EventType DetermineEvent(string notifcationMessage)
        {
            var eventType = JsonSerializer.Deserialize<GenericEventDto>(notifcationMessage);

            switch (eventType.Event)
            {
                case "Blog_Published":
                    return EventType.BlogPublished;
                default:
                    return EventType.Undetermined;
            }
        }

        private void addBlog(string blogPublishedMessage)
        {
            using (var scope = _scopeFactory.CreateScope())
            {
                var repo = scope.ServiceProvider.GetRequiredService<INewspaperRepository>();

                var blogPublishedDto = JsonSerializer.Deserialize<BlogPublishedDto>(blogPublishedMessage);

                try
                {
                    Blog blog = new Blog();
                    blog.Title = blogPublishedDto.Title;
                    blog.ImageUrl = blogPublishedDto.ImageUrl;
                    blog.Content = blogPublishedDto.Content;
                    blog.ExternalID = blogPublishedDto.Id;
                    if (!repo.ExternalBlogExists(blog.ExternalID))
                    {
                        repo.CreateBlog(1, blog);
                        repo.SaveChanges();
                    }

                }
                catch (Exception ex)
                {
                    Console.WriteLine($"--> Error add Blog {ex.Message}");
                }
            }
        }
    }

    enum EventType
    {
        BlogPublished,
        Undetermined
    }
}
