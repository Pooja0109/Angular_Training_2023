import { Component } from '@angular/core';
import { TestServiceService } from 'src/app/services/test-service.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {

  testlist:any;
  constructor(private ts:TestServiceService)
  {
    this.ts.getServices().subscribe(
      {
        next:(data:any)=>this.testlist=data,
        error:()=>this.testlist=[]
      }
    )
  }
}
