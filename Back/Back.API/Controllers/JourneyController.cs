using Back.DataAccess.Data;
using Back.DataAccess.Models;
using Back.Business.Services;
using Back.Business.Services.Implements;
using Back.DataAccess.Repositories;
using Back.DataAccess.Repositories.Implements;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Threading.Tasks;
using System.Data.Entity.Core.Common.EntitySql;
using System.Collections.Specialized;
using System.IO;

namespace Back.API.Controllers
{
    //Definicion de ruta
    [Route("api/Journey")]
    public class JourneyController : ApiController
    {
        
        private readonly JourneyService journeyService = new JourneyService(new JourneyRepository(BackContext.Create()));
        private readonly FlightService flightService = new FlightService(new FlightRepository(BackContext.Create()));
        private Graph graph = new Graph();
        private string[] nodesVisited = { };
        private List<string> nodesVisiteds = new List<string>();
        private string voy = "";
        private int count = 0;
        private int countNodes = 0;
        private bool encontro = false;
        private double totalPrice = 0.0;
        private List<Flight> flights1Finals = new List<Flight>();




        //Definicion de ruta para metodo post
        /**
         * Metodo de REST API el cual consulta en el servicio de la capa Business los vuelos y con ellos calcula con al funcion "buscarCamino"
         * los vuelos que se deben tomar para ir del origin  al destination, tambien verifica la cantidad total de vuelos para 
         * saber si cumple o no con el limite; Se hizo con POST para poderlo consumir desde Angular
         * @param inputParameters= tiene el Origin, Destination y MaxFligths
         * @returns retorna un objeto tipo Journey con la informacion requerida
         * */
        [HttpPost]
        [Route("api/Journey/calculate")]
        public async Task<IHttpActionResult> Post1(InputParameters inputParameters)
        {
            var flights = await flightService.GetAll();
            Journey journey = new Journey();
            journey.Origin = inputParameters.Origin;
            journey.Destination = inputParameters.Destination;
            CreateGraph(flights);
            voy = inputParameters.Origin;
            buscarCamino(flights, journey);
            journey.Price = totalPrice;
            if (inputParameters.MaxFlights > flights1Finals.Count())
            {
                journey.Flights = (IEnumerable<Flight>)flights1Finals;
            }
            else
            {
                journey.Flights = (IEnumerable<Flight>)flights1Finals;
            }
            return Ok(journey);
        }



        /**
        * Metodo de REST API el cual consulta en el servicio de la capa Business los vuelos y con ellos calcula con al funcion "buscarCamino"
        * los vuelos que se deben tomar para ir del origin  al destination, tambien verifica la cantidad total de vuelos para 
        * saber si cumple o no con el limite, Punto 2 y punto 3
        * @param inputParameters= tiene el Origin, Destination y MaxFligths
        * @returns retorna un objeto tipo Journey con la informacion requerida
        * */
        [HttpGet]
        public async Task<IHttpActionResult> GetJourney(InputParameters inputParameters)
        {
            var flights = await flightService.GetAll();
            Journey journey = new Journey();
            journey.Origin = inputParameters.Origin;
            journey.Destination= inputParameters.Destination;
            CreateGraph(flights);
            voy= inputParameters.Origin;
            buscarCamino(flights, journey);
            journey.Price = totalPrice;
            if(inputParameters.MaxFlights > flights1Finals.Count())
            {
                journey.Flights = (IEnumerable<Flight>)flights1Finals;
            }
            else
            {
                journey.Flights = (IEnumerable<Flight>)flights1Finals;
            }
            return Ok(journey);
        }


        /**
        * Metodo basado en dijsktra  para encontrar un "camino" desde origin hasta el destination
        * @param flights= lista de vuelos disponibles(consumidos de la API)
        *         Journey= objeto con la informacion dada por el usuario inicialmente
        * @returns nada
        * */
        public void buscarCamino(IEnumerable<Flight> flights, Journey journey)
        {
            foreach (var flight in flights)
            {
                if(flight.Origin== voy && flight.Destination== journey.Destination)
                {
                    nodesVisiteds.Insert( countNodes,flight.Origin);
                    nodesVisiteds.Insert(countNodes, flight.Destination);
                    graph.roads.Insert(count, new Road() 
                                                { Destination=flight.Destination, Origin= flight.Origin, Price= flight.Price });
                    flights1Finals.Insert(count,new Flight() 
                                                { Destination = flight.Destination, Origin = flight.Origin, Price = flight.Price });
                    totalPrice = totalPrice+flight.Price;
                    count++;
                    break;
                }
                else if(flight.Origin == voy && !nodesVisiteds.Contains(flight.Destination))
                {
                    nodesVisiteds.Insert(countNodes, flight.Origin);
                    nodesVisiteds.Insert(countNodes, flight.Destination);
                    flights1Finals.Insert(count, new Flight() 
                                                { Destination = flight.Destination, Origin = flight.Origin, Price = flight.Price });
                    totalPrice = totalPrice + flight.Price;
                    count++;
                    voy = flight.Destination;
                    buscarCamino(flights, journey);
                }
                if(voy == journey.Destination || count>=20)
                {
                    break;
                }
            }

        }




        /**
        * Metodo de REST API el cual consulta en el servicio de la capa Business los vuelos y con ellos calcula con al funcion "buscarCamino"
        * los vuelos que se deben tomar para ir del origin  al destination, tambien verifica la cantidad total de vuelos para 
        * saber si cumple o no con el limite
        * @param Flights= lista de vuelos de los que apartir de ellos se crea un grafo(clase Grap)
        * @returns nada
        * */
        public void CreateGraph(IEnumerable<Flight> flights)
        {
            Vortex[] vertices = { };
            var vaV = 0;
            var vaR = 0;
            List<Road> roads= new List<Road> ();
            foreach (var flight in flights)
            {
                
                Road[] adjacentRoads = { };
                var countAd = 0;
                foreach (var flightad in flights)
                {
                    if(flightad.Origin== flight.Origin)
                    {
                        adjacentRoads.Append( new Road() 
                                            { Origin = flight.Origin, Destination = flight.Destination, Price = flight.Price });
                        countAd++;
                    }
                }
                roads.Insert(vaR, new Road() 
                                  { Origin = flight.Origin, Destination = flight.Destination, Price = flight.Price });
                vaR++;
                vertices.Append(new Vortex()   
                            { Roads = adjacentRoads, Vorte = flight.Origin });
            }
            this.graph.roads = roads;
            this.graph.vertices = vertices;

        }
       
      
      
       
        public class InputParameters
        {
            public string Origin { get; set; }
            public string Destination { get; set; }
            public int MaxFlights { get; set; }
        }
        public class Vortex
        {
            public string Vorte { get; set; }
            public Road[] Roads { get; set; }
        }
        public class Road
        {
            public string Origin { get; set; }
            public string Destination { get; set; }
            public double Price { get; set; }
        }
        public class Graph
        {
            public Vortex[] vertices { get; set; }
            public List<Road> roads { get; set; }
        }
      
      


    }
}
