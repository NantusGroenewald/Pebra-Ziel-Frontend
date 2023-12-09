import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRepository {
  private readonly _url: string = 'https://apim-hippo-uat.azure-api.net/hippo-core/api/leads';

  constructor(private _httpClient: HttpClient) {
  }

  // TODO: Add the Key before use
  public createLeads(body: any): Observable<string> {
    return this._httpClient.post(this._url, body, { responseType: 'text', headers: { 'Ocp-Apim-Subscription-Key': '' }, withCredentials: true });
  }
}
