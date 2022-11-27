import { TransportModel } from "./Transport.model";

export class FlightModel{
    constructor (transpor: TransportModel, origin: string, destination: string, price: number){
        this.Transport=transpor;
        this.Origin=origin;
        this.Destination=destination;
        this.Price=price;

    }
    Transport?: TransportModel;
    Origin: string="";
    Destination: string="";
    Price: number=0.0;
}