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
                    Breads = new List<BreadViewModel>(),
                    Amount = 3
            }};
        }

        [HttpGet("[action]")]
        public async Task<IEnumerable<BreadViewModel>> GetBread()
        {
            var bread = await _readRepository.GetBread();

            return bread;
        }

        [HttpPost("[action]")]
        public async Task<IEnumerable<Order>> SubmitOrder([FromBody] Order order)
        {
            // Add CRUD here for submitting and order.
            return null;
        }       
    }
}
