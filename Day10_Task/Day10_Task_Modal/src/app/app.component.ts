import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogExamplesComponent } from './dialog-examples/dialog-examples.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day10_Task_Modal';

  constructor(public dialog:MatDialog)
  {}
    openDialog()
    {
      this.dialog.open(DialogExamplesComponent);
    }
    
   
}
