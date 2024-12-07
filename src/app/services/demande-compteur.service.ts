import { DemandeReponse, DemandeRequest } from './../app.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeCompteurService {

  private url = 'http://localhost:8080/api/demandeCompteur';

  constructor( private HttpClient: HttpClient) {
   }

   demande( demandeRequest: DemandeRequest): Observable<DemandeReponse>{
    // url= "http://localhost:8080/api/demandeCompteur";
    const headers= new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.HttpClient.post<DemandeReponse>(this.url, demandeRequest, {headers})
   }
}
