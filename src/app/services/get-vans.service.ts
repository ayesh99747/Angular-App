import { Van } from './../model/van';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetVansService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api/vehicles/getAllFreeVans';
  }

  public findAll(): Observable<Van[]> {
    return this.http.get<Van[]>(this.url);
  }
}
