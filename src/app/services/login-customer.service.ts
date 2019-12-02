import { LoginInfo } from './../model/login-info';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginCustomerService {
  constructor(private http: HttpClient) { }

  formData = new LoginInfo();

  readonly apiUrl = 'http://localhost:8080/api/customers/validateLogin';

  //This method validates teh logins
  public validateLogin(loginInfo: LoginInfo) {
    return this.http.post(this.apiUrl, loginInfo);
  }
}
