import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DemandeReponse, DemandeRequest } from '../app.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeCompteurService {

  constructor( private httpClient: HttpClient) {

   }

   demande( demandeRequest: DemandeRequest) : Observable<DemandeReponse> {
    const url= "http://localhost:8080/api/demandeCompteur";
    const headers= new HttpHeaders({
      'Content-type': 'application/json'
    })
    return this.httpClient.post<DemandeReponse>(url, demandeRequest, {headers} )
   }
}
