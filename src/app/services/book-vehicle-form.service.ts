import { Booking } from './../model/booking';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookVehicleFormService {

  constructor(private http: HttpClient) { }

  readonly apiUrl = 'http://localhost:8080/api/bookings/newBooking';

  //This method is used to book vehicles
  public bookVehicle(booking: Booking) {
    return this.http.post(this.apiUrl, booking);
  }
}
