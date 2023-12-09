import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpRepository} from '../repositories/http.repository';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpRepository: HttpRepository) { }

  public createLeads(body: any): Observable<string> {
    return this._httpRepository.createLeads(body);
  }
}
