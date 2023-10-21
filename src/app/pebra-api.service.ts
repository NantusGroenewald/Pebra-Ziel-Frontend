import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PebraApiService {

  constructor(private _http: HttpClient) { }

  public getGoalData() : Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get<{id :	string,
    amount:	number,
    description:	string,
    attribute:	string}>('https://app-pebra-dev.azurewebsites.net/api/goal', {headers: headers});
  }

  public getTransactionData() : Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get<{id :	string,
    amount:	number,
    description:	string,
    goalType:	string}>('https://app-pebra-dev.azurewebsites.net/api/goal', {headers: headers});
  }
}
