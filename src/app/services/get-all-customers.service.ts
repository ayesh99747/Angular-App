import { Customer } from './../model/customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllCustomersService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api/vehicles/getAllCustomers';

  }

  //This method gets all the customers
  public getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url);
  }

}
