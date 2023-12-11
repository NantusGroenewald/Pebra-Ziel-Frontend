import {Component} from '@angular/core';
import {SignalRService} from '../../../../shared/services/signal-r.service';
import {Observable} from 'rxjs';
import {Quote} from '../../../../shared/interfaces/quote.interface';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class TableComponent {
  public readonly quoteColumns: { key: string; name: string; }[] = [
    { key: 'leadId', name: 'Lead Id' },
    { key: 'vendor', name: 'Vendor Number' },
    { key: 'premium', name: 'Premium' },
    { key: 'dateCreated', name: 'Date Created' },
    { key: 'logoUrl', name: 'Logo Url' }
  ];
  public readonly itemColumns: { key: string; name: string; }[] = [
    { key: 'ackId', name: 'Ack Id' },
    { key: 'planName', name: 'Plan Name' },
    { key: 'planDescription', name: 'Plan Description' },
    { key: 'premium', name: 'Premium' },
    { key: 'coverValue', name: 'Cover Value' },
    { key: 'discountedPremium', name: 'Discounted Premium' },
    { key: 'excess', name: 'Excess' },
    { key: 'numberOfCoveredMembers', name: 'Number of covered members' }
  ];

  public quotes$: Observable<Quote[]> = this._signalRService.quotes$;
  public expandedElement: Quote | undefined = undefined;
  public columnsToDisplayWithExpand: string[] = [...this.quoteColumns.map(x => x.key), 'expand'];
  public get itemHeaders(): string[] { return this.itemColumns.map(x => x.key) };

  constructor(private _signalRService: SignalRService) {
  }
}
