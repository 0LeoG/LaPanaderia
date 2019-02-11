using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using la_panaderia.ClientApp.Models;
using la_panaderia.ClientApp.Repository;
using Microsoft.AspNetCore.Mvc;

namespace la_panaderia.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private readonly IPanaderiaReadRepository _readRepository;
        public SampleDataController(IPanaderiaReadRepository readRepository)
        {
            _readRepository = readRepository;

        }

        [HttpGet("[action]")]
        public IEnumerable<Order> GetOrders()
        {
            return new List<Order>{
                new Order(){
                    Name = "Leo",
                    OrderBreads = new List<BreadViewModel>(),
                    Amount = 3
            }};
        }

        [HttpGet("[action]")]
        public async Task<IEnumerable<BreadOption>> GetBread()
        {
            var bread = await _readRepository.GetBread();

            var breadOptions = bread.Select(x => new BreadOption{Value = x.Name, Label = x.Name});

            return breadOptions;
        }

        [HttpPost("[action]")]
        public async Task<IEnumerable<Order>> SubmitOrder([FromBody] Order order)
        {
            // Add CRUD here for submitting and order.
            return null;
        }

        public class BreadOption
        {
            public string Value { get; set; }
            public string Label { get; set; }
        }
    }
}
