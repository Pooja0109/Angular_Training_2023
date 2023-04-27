import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DetailsServiceService } from 'src/app/services/details-service.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {
  reviewForm: any;
  id:any;
  constructor(private fb: FormBuilder, private fs:DetailsServiceService,private ar:ActivatedRoute) {
    this.reviewForm = this.fb.group({
      name: ['', [Validators.minLength(3)]],
      review: ['', [Validators.minLength(5)]]
    });

    this.ar.params.subscribe(
      {
        next: (params)=>{ 
         this.id =params['pooja']
        },
        error: () => this.id = 0
      }
    )
  }
  
  saveFeedback(){

    var temp:any={
      id01:this.id,
      name: this.reviewForm.value.name,
      review:this.reviewForm.value.review
    }
    this.fs.postReview(temp).subscribe(
     { 
      next: data=>{
        alert('Your Review is saved')
        location.reload();
      },
      error:(error)=>alert('Not saved ---some Error')
    }

    )

  }
}
