using Microsoft.Owin;
using Owin;
using System;
using System.Threading.Tasks;
using Back.DataAccess.Data;
using System.Web.Http;


namespace Back.API
{
    public partial  class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.CreatePerOwinContext(BackContext.Create);
           
        }
        public static void Register(HttpConfiguration config)
        {
            var json = config.Formatters.Remove(config.Formatters.XmlFormatter);
        }
    }
}
