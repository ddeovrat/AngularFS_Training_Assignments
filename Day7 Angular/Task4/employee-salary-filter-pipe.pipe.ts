import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeSalaryFilterPipe'
})
export class EmployeeSalaryFilterPipePipe implements PipeTransform {

  transform(inputData:any[],min:number,max:number): any {
    return inputData.filter(item=>item["empSalary"]>=min && item["empSalary"]<=max );
  }

}
