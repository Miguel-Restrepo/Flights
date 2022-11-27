﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Back.API
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Configuración y servicios de Web API
            //Permiter solicitudes desde otra ip o puerto(se hace para que angular pueda cosumir el back)
            config.EnableCors();
            var enableCorsAttribute = new EnableCorsAttribute("*",
                                                                "Origin, Content-Type, Accept",
                                                                "GET, POST, OPTIONS");
            config.EnableCors(enableCorsAttribute);
               

            GlobalConfiguration.Configuration.Formatters.JsonFormatter.MediaTypeMappings.Add(
                                new System.Net.Http.Formatting.RequestHeaderMapping("Accept", 
                                                                                    "text/html", 
                                                                                    StringComparison.InvariantCultureIgnoreCase,
                                                                                    true,
                                                                                    "application/json"));
            
            var json = GlobalConfiguration.Configuration.Formatters.JsonFormatter;

            json.UseDataContractJsonSerializer=true;
            config.Formatters.Remove(config.Formatters.XmlFormatter);
            // Rutas de Web API
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
