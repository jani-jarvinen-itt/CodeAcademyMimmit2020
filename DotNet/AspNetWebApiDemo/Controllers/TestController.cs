using Microsoft.AspNetCore.Mvc;

namespace AspNetWebApiDemo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "Moi!";
        }
    }
}
