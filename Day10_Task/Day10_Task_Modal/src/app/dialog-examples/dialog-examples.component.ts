import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-examples',
  templateUrl: './dialog-examples.component.html',
  styleUrls: ['./dialog-examples.component.css']
})
export class DialogExamplesComponent {
  edus: string[] = [
    "MCA",
    "MTech",
    "BTech"
  ];
}
