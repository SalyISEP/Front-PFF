import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransactionRequest } from '../app.models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor( private HttpClient: HttpClient) { }


  transaction(transactionRequest: TransactionRequest) : Observable<string> {
    const url= "http://localhost:8080/api/transaction/save-transaction";
    const headers= new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.HttpClient.post<string>(url, transactionRequest, {headers});
   }
}
