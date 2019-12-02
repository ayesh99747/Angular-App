import { Car } from './../model/car';
import { Vehicle } from './../model/vehicle';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetVehiclesToBeReturnedService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api/vehicles/getVehiclesToBeReturned';
  }

  //This method gets all the Vehicles
  public getAllVehicles(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url);
  }
}
