import { Motorbike } from './../model/motorbike';
import { Van } from './../model/van';
import { Car } from './../model/car';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllFreeVehiclesService {

  private carUrl: string;
  private vanUrl: string;
  private motorbikeUrl: string;


  constructor(private http: HttpClient) {
    this.carUrl = 'http://localhost:8080/api/vehicles/getAllFreeCars';
    this.vanUrl = 'http://localhost:8080/api/vehicles/getAllFreeVans';
    this.motorbikeUrl = 'http://localhost:8080/api/vehicles/getAllFreeMotorbikes';

  }

  public getAllFreeCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carUrl);
  }

  public getAllFreeVans(): Observable<Van[]> {
    return this.http.get<Van[]>(this.vanUrl);
  }

  public getAllFreeMotorbikes(): Observable<Motorbike[]> {
    return this.http.get<Motorbike[]>(this.motorbikeUrl);
  }
}
