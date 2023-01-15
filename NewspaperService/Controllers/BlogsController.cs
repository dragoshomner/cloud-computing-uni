using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewspaperService.Controllers
{
    [Route("api/newspaper/[controller]")]
    [ApiController]
    public class BlogsController : ControllerBase
    {
        public BlogsController()
        {

        }

        [HttpPost]
        public ActionResult Test()
        {
            Console.WriteLine("--> Inbound test Newspaper Service");
            return Ok("Inbound test of from Blog Controller");
        }
    }
}
