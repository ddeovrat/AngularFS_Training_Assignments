import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradePipe'
})
export class GradePipe implements PipeTransform {

  transform(input:number):string
  {
    if(input>0 && input<6)
    {
      let gradeArray:string[]=["Outstanding","Excellent","Good","Average","Poor"];
      return gradeArray[input-1];
    }
    else
    {
      return "Invalid";
    }
    
  }

}
