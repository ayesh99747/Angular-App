import { Motorbike } from './../model/motorbike';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetMotorbikesService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api/vehicles/getAllFreeMotorbikes';
  }

  public findAll(): Observable<Motorbike[]> {
    return this.http.get<Motorbike[]>(this.url);
  }
}
