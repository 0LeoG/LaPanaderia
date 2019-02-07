using System.Data;

namespace la_panaderia.ClientApp.Connections
{
    public interface IPanaderiaConnectionFactory
    {
         IDbConnection GetConnection();
    }
}