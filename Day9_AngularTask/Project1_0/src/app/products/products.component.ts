import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
@Input() Product_titles:string=""
@Input() Product_desc:string=""
@Input() Product_img:string=""
}
