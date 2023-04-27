import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeRange'
})
export class PipeRangePipe implements PipeTransform {

  transform(products: any, min:any, max:any): any 
  {
    return products.filter((x:any)=>parseInt(x.price)>=min && parseInt(x.price)<=max)
  }

}
