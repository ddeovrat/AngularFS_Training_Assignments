import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradePipe'
})
export class GradePipePipe implements PipeTransform {

  transform(input:number):string
  {
    let gradeArray:string[]=["Excellent","Very Good","Good"];
    return gradeArray[input-1];
  }

}
