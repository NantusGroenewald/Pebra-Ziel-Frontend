import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PebraApiService } from './pebra-api.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { VacationCardComponent } from './vacation-card/vacation-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { LeadershipBoardComponent } from './leadership-board/leadership-board.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  declarations: [
    AppComponent,
    VacationCardComponent,
    LeadershipBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatProgressBarModule,
    HttpClientModule
  ],
  providers: [PebraApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
