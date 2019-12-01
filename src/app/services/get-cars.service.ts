import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class GetCarsService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api/vehicles/getAllFreeCars';
  }

  public findAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url);
  }
}
