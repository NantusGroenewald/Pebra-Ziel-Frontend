import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

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
export class LeadershipBoardComponent {

  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;
}
