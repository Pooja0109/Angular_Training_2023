import { Component,Input} from '@angular/core';
import { DetailsServiceService } from 'src/app/services/details-service.service';

@Component({
  selector: 'app-collect-review',
  templateUrl: './collect-review.component.html',
  styleUrls: ['./collect-review.component.css']
})
export class CollectReviewComponent {
  @Input() idPass:any;
  Reviewlist:any;
  constructor(private Ds:DetailsServiceService)
  {
    this.Ds.getReview().subscribe(
      {
        next:(data:any)=>this.Reviewlist=data,
        error:()=>this.Reviewlist=[]
      }
    )
  }
}
