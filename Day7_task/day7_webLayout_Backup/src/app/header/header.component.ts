import { Component } from '@angular/core';
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import { Theme1,Theme2 } from './ThemeMode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
iconHeart=faHeart;
currentheme= Theme1;

changeTheme(theme:string):void{
  this.currentheme=theme=="Theme1" ? Theme1 : Theme2;
}
}
