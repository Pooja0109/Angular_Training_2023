import { Component } from '@angular/core';
import {faAngleRight,faAngleLeft} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.css']
})
export class BodyComponentComponent {
iconLeft=faAngleLeft;
iconRight=faAngleRight;
}
