import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginReponse, LoginRequest } from '../app.models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor( private httpClient: HttpClient) {
   }

   
   login( loginRequest: LoginRequest) : Observable<LoginReponse> {
    const url= "http://localhost:8080/api/auth/login";
    const headers= new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.httpClient.post<LoginReponse>(url, loginRequest, {headers} )
   }
}

