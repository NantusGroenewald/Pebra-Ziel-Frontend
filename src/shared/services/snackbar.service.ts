import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  public openSnackBar(message: string, panelClasses: string[] = ['panel-success']): void {
    this._snackBar.open(message, 'mmmk', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000,
      panelClass: panelClasses
    });
  }
}
