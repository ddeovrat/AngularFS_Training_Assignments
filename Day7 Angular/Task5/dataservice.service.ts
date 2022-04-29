import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {


  public dataArray:any[]=[{empNo:123,empName:"Deepankar",empEmail:"D@Gmail.com",empGender:"M",empGrade:1,empSalary:100},
  {empNo:124,empName:"swati",empSalary:205},
  {empNo:125,empName:"RoHan",empSalary:50},
  {empNo:126,empName:"Priya",empSalary:800},
  {empNo:127,empName:"Raj",empSalary:150},
  {empNo:128,empName:"SwaPnil",empSalary:454},
  {empNo:129,empName:"Shreya",empSalary:232},
  {empNo:130,empName:"Rishika",empSalary:10},
  {empNo:131,empName:"Kunal",empSalary:675},
  {empNo:132,empName:"AnAnd",empSalary:555},
];
  public getEmpData():any[]
  {
    return this.dataArray;
  }
  public addEmpData(obj:Object):any[]
  {
    this.dataArray.push(obj);
    return this.dataArray;
  }
  public removeEmpData(id:number):any[]
  {
    this.dataArray= this.dataArray.filter(item=>item.empNo!=id);
    return this.dataArray;
  }
}
