using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using AspNetWebApiDemo.Models;

namespace AspNetWebApiDemo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {
        /*
        [HttpGet]
        public string Kellonaika()
        {
            return DateTime.Now.ToString();
        }
        */

        [HttpGet]
        public List<Customer> Asiakkaat()
        {
            NorthwindContext context = new NorthwindContext();

            return context.Customers.ToList();
        }

        [HttpGet]
        [Route("tilaukset")]
        public List<Order> Tilaukset()
        {
            NorthwindContext context = new NorthwindContext();

            return context.Orders.ToList();
        }
    }
}
