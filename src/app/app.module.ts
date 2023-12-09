import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PebraApiService} from './pebra-api.service';
import {HttpClientModule} from '@angular/common/http';
import {VacationCardComponent} from './vacation-card/vacation-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {LeadershipBoardComponent} from './leadership-board/leadership-board.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {TableComponent} from './leadership-board/components/table/table.component';
import {InputComponent} from './leadership-board/components/input/input.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VacationCardComponent,
    LeadershipBoardComponent,
    TableComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatProgressBarModule,
    HttpClientModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule
  ],
  providers: [PebraApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
