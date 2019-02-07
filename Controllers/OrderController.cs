using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using la_panaderia.ClientApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace la_panaderia.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {     
        [HttpGet("[action]")]
        public IEnumerable<Order> GetOrders()
        {
            return new List<Order>{
                new Order(){
                    Name = "Leo",
                    Breads = new List<BreadViewModel>(),
                    Amount = 3
            }};
        }

        [HttpPost("[action]")]
        public IEnumerable<Order> SubmitOrder([FromBody] Order order)
        {
            return null;
        }       
    }
}
