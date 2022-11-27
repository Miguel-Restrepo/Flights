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
  problem4(origin: string, destination: string, maxFlights: number): Observable<JourneyModel> {
    return this.http.post<JourneyModel>(`${this.urlBack}`, {
      Origin: origin,
      Destination: destination,
      MaxFlights: maxFlights
    }, {
      headers: new HttpHeaders()
    });
  }


}
