import { Component, OnInit  } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import *  as signalR from '@microsoft/signalr';
import { HttpClient } from '@angular/common/http';
import { Quote } from './quote.interface';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Nantus', weight: 413},
  {position: 2, name: 'Hanroe', weight: 250},
  {position: 3, name: 'Ian Joubert', weight: 178.65},
  {position: 4, name: 'Casparus', weight: 14.2},
  {position: 5, name: 'Tia', weight: 14.2},];
@Component({
  selector: 'app-leadership-board',
  templateUrl: './leadership-board.component.html',
  styleUrls: ['./leadership-board.component.scss']
})
export class LeadershipBoardComponent implements OnInit{
  private _hubConnection!: signalR.HubConnection;
  public quotes: Quote[] = [];

  constructor(private _httpClient: HttpClient) { }
  ngOnInit(): void {
    this.connect();
  }

  public onSendButtonClick(): void {
    this._hubConnection.send('SendMessage', 'test message').then(r => { });
  }
  displayedColumns: string[] = ['Id', 'VendorName', 'Premium', 'LogoUrl'];
  dataSource = ELEMENT_DATA;
  subscriptionKey = '';
  
  private connect(): void {
    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`https://apim-hippo-uat.azure-api.net/hippo-core/hub/quote?subscription-key=b623def47ab04030a27feda99ecf5168`)
      .build();

    this._hubConnection.on('quoteDto', (message: Quote) => {
      console.log(message);
      this.quotes = [...this.quotes, message];
    });

    this._hubConnection.start()
      .then(() => console.log('connection started'))
      .then(() => console.log(this._hubConnection.connectionId))
      .catch((err) => console.log('error while establishing signalr connection: ' + err));
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