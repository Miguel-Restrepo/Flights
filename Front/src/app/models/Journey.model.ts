import { FlightModel } from "./Flight.model";
//PROBLEMA 1
//Class JourneyModel Hecha para modelar los diferentes viajes de la app
export class JourneyModel{
    Flights: FlightModel[]= [];
    JourneyId: number=0;
    Origin: string="";
    Destination: string="";
    Price: number=0.0;
}
