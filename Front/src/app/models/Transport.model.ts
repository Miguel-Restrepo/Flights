//PROBLEMA 1
//Class TransportModel Hecha para modelar el trasnporte del viaje de la app
export class TransportModel {
    constructor(flightCarrier: string, flightNumber: string) {
        this.FlightCarrier = flightCarrier;
        this.FlightNumber = flightNumber;

    }
    FlightCarrier: string = "";
    FlightNumber: string = "";

}