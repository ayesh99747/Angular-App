import { Motorbike } from './../model/motorbike';
import { Van } from './../model/van';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class GetAllVehiclesService {

  private carUrl: string;
  private vanUrl: string;
  private motorbikeUrl: string;


  constructor(private http: HttpClient) {
    this.carUrl = 'http://localhost:8080/api/vehicles/getAllCars';
    this.vanUrl = 'http://localhost:8080/api/vehicles/getAllVans';
    this.motorbikeUrl = 'http://localhost:8080/api/vehicles/getAllMotorbikes';

  }

  public getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carUrl);
  }

  public getAllVans(): Observable<Van[]> {
    return this.http.get<Van[]>(this.vanUrl);
  }

  public getAllMotorbikes(): Observable<Motorbike[]> {
    return this.http.get<Motorbike[]>(this.motorbikeUrl);
  }
}
