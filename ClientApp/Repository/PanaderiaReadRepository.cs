using Dapper;
using System.Collections.Generic;
using System.Threading.Tasks;
using la_panaderia.ClientApp.Connections;
using la_panaderia.ClientApp.Models;

namespace la_panaderia.ClientApp.Repository
{
    public class PanaderiaReadRepository : IPanaderiaReadRepository
    {
        private readonly IPanaderiaConnectionFactory _connectionFactory;

        public PanaderiaReadRepository(IPanaderiaConnectionFactory  connectionFactory){
            _connectionFactory = connectionFactory;
        }

        public Task<IEnumerable<Order>> GetOrders()
        {
            throw new System.NotImplementedException();
        }

        public async Task<IEnumerable<BreadViewModel>> GetBread(){
            using(var connection = _connectionFactory.GetConnection()){
                var result = await connection.QueryAsync<BreadViewModel>("Select * from dbo.Bread");
                return result;
            }
        }

    }
}