import {Injectable} from '@angular/core';
import * as signalR from '@microsoft/signalr';
import {HubConnection} from '@microsoft/signalr';
import {Quote} from '../interfaces/quote.interface';
import {Subject} from 'rxjs';
import {HttpService} from './http.service';
import {SnackbarService} from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private _hubConnection: HubConnection | undefined = undefined;
  private _quotes: Quote[] = [];

  public readonly quotes$: Subject<Quote[]> = new Subject();

  public get connectionId(): string { return this._hubConnection?.connectionId ?? ''; }

  constructor(private _httpService: HttpService, private _snackbarService: SnackbarService) { }

  private subscribeToChanges(): void {
    this._hubConnection?.on('quoteDto', (message: Quote) => {
      console.log(message);
      // TODO: Check if all quotes are returned from message
      this._quotes = [...this._quotes, message];

      this.quotes$.next(this._quotes);
    });
  }

  public clearQuotes(): void {
    this._quotes = [];
    this.quotes$.next([]);
  }

  public establishConnection(): void {
    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`https://apim-hippo-uat.azure-api.net/hippo-core/hub/quote?subscription-key=b623def47ab04030a27feda99ecf5168`)
      .build();

    this._hubConnection.start()
      .then(() => this._snackbarService.openSnackBar('Connection established'))
      .catch((err) => {
        console.error('error while establishing signalr connection: ' + err);
        this._snackbarService.openSnackBar('Failed to establish connection');
      });

    this.subscribeToChanges();
  }

  public manualStartConnection(): void {
    if (!!this._hubConnection) {
      this._hubConnection.stop();
    }

    this.establishConnection();
  }

  public stopConnection(): void {
    this._hubConnection?.stop().then(() => this._snackbarService.openSnackBar('Connection closed'));
  }
}
