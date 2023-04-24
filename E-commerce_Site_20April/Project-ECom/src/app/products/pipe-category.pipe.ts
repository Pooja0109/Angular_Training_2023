import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCategory'
})
export class PipeCategoryPipe implements PipeTransform {

  transform(cat:any,type:string):any {
    if(type=="All")
    return cat;

    return cat.filter((x:any)=>x.type==type);
  }

}
