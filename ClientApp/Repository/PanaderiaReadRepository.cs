using System.Collections.Generic;
using System.Threading.Tasks;
using la_panaderia.ClientApp.Models;

namespace la_panaderia.ClientApp.Repository
{
    public class PanaderiaReadRepository : IPanaderiaReadRepository
    {
        public async Task<IEnumerable<Order>> GetOrders()
        {
            throw new System.NotImplementedException();
        }
    }
}