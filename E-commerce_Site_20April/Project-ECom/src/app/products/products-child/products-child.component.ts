import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-products-child',
  templateUrl: './products-child.component.html',
  styleUrls: ['./products-child.component.css']
})
export class ProductsChildComponent {
  @Input() prods:any;
}
