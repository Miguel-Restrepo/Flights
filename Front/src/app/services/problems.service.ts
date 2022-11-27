import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from '../config/general.data';
import { FlightModel } from '../models/Flight.model';
import { JourneyModel } from '../models/Journey.model';
import { TransportModel } from '../models/Transport.model';

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {
  private urlFlights: string = GeneralData.FLIGHTS_URL;
  private urlBack: string = GeneralData.BACK_URL;
  private flights: FlightModel[] = [];
  constructor(private http: HttpClient) { }

  /**
   * PROBLEMA 2
   * Metodo que me consume la REST API de vuelos, y convierte la respuesta segun el modelo definido en el
   * problema 1
   * @params no existen
   * @return FlightModel[]--> lista de vuelos devueltos por la api
   */
  problem2(): FlightModel[] {
    this.http.get<Object[]>(`${this.urlFlights}`).subscribe({
      next: (listObjects: Object[]) => {
        let flight = {
          "departureStation": "",
          "arrivalStation": "",
          "flightCarrier": "",
          "flightNumber": "",
          "price": 0
        }
        listObjects.forEach(element => {
          flight = Object.assign(flight, element);
          this.flights.push(new FlightModel(new TransportModel(flight['flightCarrier'],
            flight['flightNumber']), flight['departureStation'], flight['arrivalStation'], flight['price']));
        });
      },
      error: err => {
        return [];
      }
    });
    return this.flights;
  }


  /**
   * PROBLEMA 3 y 4
   * Metodo que me consume la REST API del backend (.NET C#), donde se calcula atraves de Dikstra los
   * posibles vuelos que se deben tomar para ir del origen al destino
   
   * @params origin= origen de 3 caracteres, 
              destination= destino deseado de 3 caracteres y en mayuscula ambos
              maxFlights= define el maximo de vuelos dispuestos a tomar
   * @return Observable<JourneyModel> devuelve la promesa de un objeto de la clase JourneyModel(
              contiene la informacion del precio total y los vuelos que debe tomar 
   )
   */
  problem4(origin: string, destination: string, maxFlights: number): Observable<JourneyModel> {
    return this.http.post<JourneyModel>(`${this.urlBack}`, {
                                                  Origin: origin,
                                                  Destination: destination,
                                                  MaxFlights: maxFlights
                                                },
                                                {

                                                  headers: new HttpHeaders()
                                                });
  }


}
