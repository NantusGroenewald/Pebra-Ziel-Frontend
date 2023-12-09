import {Component, OnDestroy} from '@angular/core';
import {SignalRService} from '../../shared/services/signal-r.service';
import {HttpService} from '../../shared/services/http.service';
import {SnackbarService} from '../../shared/services/snackbar.service';

@Component({
  selector: 'app-leadership-board',
  templateUrl: './leadership-board.component.html',
  styleUrls: ['./leadership-board.component.scss']
})
export class LeadershipBoardComponent implements OnDestroy {
  public value: string = '';

  constructor(private _signalRService: SignalRService, private _httpService: HttpService, private _snackbarService: SnackbarService) {
    this._signalRService.establishConnection();
  }

  public clearQuotes(): void {
    this._signalRService.clearQuotes();
  }

  public stopConnection(): void {
    this._signalRService.stopConnection();
  }

  public startConnection(): void {
    this._signalRService.manualStartConnection();
  }

  public requestTableData(): void {
    try {
      let obj = JSON.parse(this.value);

      obj = { ...obj, connectionId: this._signalRService.connectionId };

      this._httpService.createLeads(obj).subscribe();
    } catch (error) {
      this._snackbarService.openSnackBar('Not a valid JSON object', ['panel-error']);
      console.error(error);
    }
  }

  public ngOnDestroy(): void {
    this._signalRService.stopConnection();
  }
}
//this._hubConnection = new signalR.HubConnectionBuilder()
//.withUrl('https://sigr-hippo-localdev.service.signalr.net/hub/quote', {
//  skipNegotiation: true,
//  transport: signalR.HttpTransportType.WebSockets,
//  accessTokenFactory:() =>'9tjAArWfLjO9c0xyZ9CgzCBkEq/SazkAMMIcgTJyczg='
//})
// .withUrl('http://localhost:53897/hub/quote')
// .withUrl('https://app-hippo-core-localdev.azurewebsites.net/hub/quote')
// .withUrl('Endpoint=https://sigr-hippo-localdev.service.signalr.net;AccessKey=9tjAArWfLjO9c0xyZ9CgzCBkEq/SazkAMMIcgTJyczg=;ClientEndpoint=https://app-hippo-core-localdev.azurewebsites.net/hub/quote;Version=1.0;')
//.withUrl('https://sigr-hippo-localdev.service.signalr.net/hub/quote')
//.withUrl('https://sigr-hippo-localdev.service.signalr.net;AccessKey=9tjAArWfLjO9c0xyZ9CgzCBkEq/SazkAMMIcgTJyczg=;Version=1.0;')
//.withUrl('ws(s)://apim-hippo-localdev.azure-api.net/client',{
 //skipNegotiation: true,
//  transport: signalR.HttpTransportType.WebSockets
//})
// .withUrl('https://apim-hippo-localdev.azure-api.net',{
//   transport: signalR.HttpTransportType.WebSockets,
//   //headers: new signalR.MessageHeaders({
//     // 'Access-Control-Allow-Origin':'*',
//     // 'Authorization':'authkey',
//     // 'userid':'1'
//   // })
// })
//.withUrl('https://sigr-hippo-localdev.service.signalr.net/client')
//.withUrl('https://apim-hippo-localdev.azure-api.net')
//.withUrl('https://apim-hippo-uat.azure-api.net')
//.withUrl('https://app-hippo-core-localdev.azurewebsites.net/hub/quote')
//.withUrl('https://apim-hippo-localdev.azure-api.net/hippo-core/hub/quote?subscription-key=095bc294fb2b470482ce514b1f44d1b7')
//.withUrl('https://apim-hippo-uat.azure-api.net/hippo-core/hub/quote?subscription-key=b623def47ab04030a27feda99ecf5168')
//.build();
