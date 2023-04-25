import { Component,Input } from '@angular/core';
import { ProductServicesService } from '../services/product-services.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productLST:any;
  Prod_Types:string[]=
  [
    "All",
    "Electronics",
    "Grocery",
    "Stationary"
  ]
  selected="All"

  minval:number=100;
  maxval:number=50000;

  constructor(private Ps:ProductServicesService)
  {
    this.Ps.getProducts().subscribe(
      {
        next:(data:any)=>this.productLST=data,
        error:()=>this.productLST=[]
      }
    )
  }
}
