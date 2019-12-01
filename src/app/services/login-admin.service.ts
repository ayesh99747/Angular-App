import { LoginInfo } from './../model/login-info';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {

  constructor(private http: HttpClient) { }

  formData = new LoginInfo();

  readonly apiUrl = 'http://localhost:8080/api/managers/validateLogin';

  validateLogin(loginInfo: LoginInfo) {
    return this.http.post(this.apiUrl, loginInfo);
  }
}
