using System.Collections.Generic;
using System.Threading.Tasks;
using la_panaderia.ClientApp.Models;

namespace la_panaderia.ClientApp.Repository
{
    public interface IPanaderiaReadRepository
    {
        Task<IEnumerable<Order>> GetOrders();

        Task<IEnumerable<BreadViewModel>> GetBread();

    }
}