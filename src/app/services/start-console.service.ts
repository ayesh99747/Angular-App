import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StartConsoleService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api/managers/console';
  }

  public startConsole() : Observable<any> {
    return this.http.get<any>(this.url);
  }
}
