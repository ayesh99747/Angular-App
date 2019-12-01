import { Observable } from 'rxjs';
import { Manager } from './../model/manager';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddManagerService {

  private url1: string;
  private url2: string;

  constructor(private http: HttpClient) {
    this.url1 = 'http://localhost:8080/api/managers/addManager';

   }

  formData = new Manager();


  addManager(manager: Manager) {
    return this.http.post(this.url1, manager);
  }

  public validateManagerUsername(username: string): Observable<boolean> {
    this.url2 = 'http://localhost:8080/api/managers/isUsernamePresent?username=' + username;
    return this.http.get<boolean>(this.url2);
  }

}
