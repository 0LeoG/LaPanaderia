using System;
using Autofac;
using la_panaderia.ClientApp.Connections;

namespace la_panaderia.ClientApp.Configuration
{
    public class DatabaseConfiguration : Module
    {
        protected override void Load(ContainerBuilder builder){
            builder.Register(c => {
                var config = c.Resolve<PanaderiaConfiguration>();

                if(string.IsNullOrEmpty(config.ConnectionString)){
                    throw new Exception("Connection String Does not exist");
                }

                return new PanaderiaConnectionFactory(config.ConnectionString);
            }).As<IPanaderiaConnectionFactory>().InstancePerLifetimeScope();
        }
    }
}