import { Observable } from 'rxjs';
import { Customer } from './../model/customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddCustomerService {

  private url1: string;
  private url2: string;

  constructor(private http: HttpClient) {
    this.url1 = 'http://localhost:8080/api/customers/addCustomer';

   }

  formData = new Customer();


  addCustomer(customer: Customer) {
    return this.http.post(this.url1, customer);
  }

  public validateCustomerUsername(username: string): Observable<boolean> {
    this.url2 = 'http://localhost:8080/api/customers/isUsernamePresent?username=' + username;
    return this.http.get<boolean>(this.url2);
  }
}
