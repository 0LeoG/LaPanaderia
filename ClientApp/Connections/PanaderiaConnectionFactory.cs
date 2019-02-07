using System.Data;
using System.Data.SqlClient;

namespace la_panaderia.ClientApp.Connections
{
    public class PanaderiaConnectionFactory : IPanaderiaConnectionFactory
    {
        private readonly string _connectionString;

        public PanaderiaConnectionFactory(string connectionString)
        {
            _connectionString = connectionString;
        }

        public IDbConnection GetConnection()
        {
            return new SqlConnection(_connectionString);
        }
    }
}