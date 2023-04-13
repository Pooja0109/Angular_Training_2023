import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-slid-show',
  templateUrl: './slid-show.component.html',
  styleUrls: ['./slid-show.component.css']
})
export class SlidShowComponent {

  @Input() M_heading:string=""
  @Input() S_heading:string=""

}
