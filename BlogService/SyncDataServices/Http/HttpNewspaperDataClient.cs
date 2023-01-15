using BlogService.Dtos;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace BlogService.SyncDataServices.Http
{
    public class HttpNewspaperDataClient : INewspaperDataClient
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _configuration;

        public HttpNewspaperDataClient(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _configuration = configuration;
        }


        public async Task SendBlogToNewspaper(BlogReadDto blog)
        {
            var httpContent = new StringContent(
                JsonSerializer.Serialize(blog),
                Encoding.UTF8,
                "application/json");

            var response = await _httpClient.PostAsync($"{_configuration["NewspaperService"]}", httpContent);

            if (response.IsSuccessStatusCode)
            {
                Console.WriteLine("--> Sync POST to NewspaperService was OK!");
            }
            else
            {
                Console.WriteLine("--> Sync POST to NewspaperService was NOT OK!");
            }
        }
    }
}
