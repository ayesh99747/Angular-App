import { Motorbike } from './../model/motorbike';
import { Van } from './../model/van';
import { Car } from './../model/car';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllBookedVehiclesService {

  private carUrl: string;
  private vanUrl: string;
  private motorbikeUrl: string;


  constructor(private http: HttpClient) {
    this.carUrl = 'http://localhost:8080/api/vehicles/getAllBookedCars';
    this.vanUrl = 'http://localhost:8080/api/vehicles/getAllBookedVans';
    this.motorbikeUrl = 'http://localhost:8080/api/vehicles/getAllBookedMotorbikes';

  }

  //This method is used to get all the booked cars
  public getAllBookedCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carUrl);
  }

  //This method is used to get all the booked vans
  public getAllBookedVans(): Observable<Van[]> {
    return this.http.get<Van[]>(this.vanUrl);
  }

  //This method is used to get all the booked motorbikes
  public getAllBookedMotorbikes(): Observable<Motorbike[]> {
    return this.http.get<Motorbike[]>(this.motorbikeUrl);
  }
}
