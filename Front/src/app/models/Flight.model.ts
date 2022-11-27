import { TransportModel } from "./Transport.model";
//PROBLEMA 1
//Class FlightModel Hecha para modelar los diferentes vuelos de la app
export class FlightModel{
    constructor (transpor: TransportModel, origin: string, destination: string, price: number){
        this.Transport=transpor;
        this.Origin=origin;
        this.Destination=destination;
        this.Price=price;
    }
    Transport?: TransportModel;
    TransportID: number= 0;
    Origin: string="";
    Destination: string="";
    Price: number=0.0;
}