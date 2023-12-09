import {Component} from '@angular/core';
import {SignalRService} from '../../../../shared/services/signal-r.service';
import {Observable} from 'rxjs';
import {Quote} from '../../../../shared/interfaces/quote.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  public readonly displayedColumns: string[] = ['id', 'vendorName', 'premium', 'logoUrl'];

  public quotes$: Observable<Quote[]> = this._signalRService.quotes$;

  constructor(private _signalRService: SignalRService) {
  }
}
