import { FlightModel } from "./Flight.model";

export class JourneyModel{
    Flights: FlightModel[]= [];
    Origin: string="";
    Destination: string="";
    Price: number=0.0;
}
