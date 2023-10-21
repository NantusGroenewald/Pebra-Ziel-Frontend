import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { PebraApiService } from './pebra-api.service';
import { Observable, switchMap, concat, of, takeUntil, map, Subject, BehaviorSubject } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  destroy$ = new Subject();
  reload$ = new BehaviorSubject(true);
  title = 'pebraziel-frontend';

  constructor(private _pebraApiService: PebraApiService) { }

  Something: any = this._pebraApiService.getGoalData().pipe();

  // @ViewChild("chart") chart: ChartComponent;
  // public chartOptions: ChartOptions;

  // constructor() {
  //   this.chartOptions = {
  //     series: [{
  //     name: 'Marine Sprite',
  //     data: [44, 55, 41, 37, 22, 43, 21]
  //   }, {
  //     name: 'Striking Calf',
  //     data: [53, 32, 33, 52, 13, 43, 32]
  //   }, {
  //     name: 'Tank Picture',
  //     data: [12, 17, 11, 9, 15, 11, 20]
  //   }, {
  //     name: 'Bucket Slope',
  //     data: [9, 7, 5, 8, 6, 9, 4]
  //   }, {
  //     name: 'Reborn Kid',
  //     data: [25, 12, 19, 32, 25, 24, 10]
  //   }],
  //     chart: {
  //     type: 'bar',
  //     height: 350,
  //     stacked: true,
  //   },

  //   title: {
  //     text: 'Fiction Books Sales'
  //   },
  //   xaxis: {
  //     categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
  //     labels: {
  //       formatter: function (val) {
  //         return val + "K"
  //       }
  //     }
  //   }




  //   };
  // }

}
