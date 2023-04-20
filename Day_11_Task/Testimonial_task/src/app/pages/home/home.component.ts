import { Component } from '@angular/core';
import { HomeServiceService } from 'src/app/services/home-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  servicelist:any;
  constructor(private hs:HomeServiceService)
  {
    this.hs.getServices().subscribe(
      {
        next:(data:any)=>this.servicelist=data,
        error:()=>this.servicelist=[]
      }
    )
  }
}
