import { Component } from '@angular/core';
import { datafields } from './appinfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

dataitems=datafields
title:string="OUR PRODUCT"
F_titles:string[]=this.dataitems.titlelist
desc:string[]=
[
   datafields.seo,
   datafields.branding,
   datafields.logo
]
images:string[]=this.dataitems.img_PNG
}
