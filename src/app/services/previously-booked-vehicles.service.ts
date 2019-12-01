import { Booking } from './../model/booking';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreviouslyBookedVehiclesService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api/vehicles/getBookings?username=';
  }

  public findAll(): Observable<Booking[]> {
    const user = sessionStorage.getItem('username');
    this.url += user;
    return this.http.get<Booking[]>(this.url);
  }
}
