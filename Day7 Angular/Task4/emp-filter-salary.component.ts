import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-filter-salary',
  templateUrl: './emp-filter-salary.component.html',
  styleUrls: ['./emp-filter-salary.component.css']
})
export class EmpFilterSalaryComponent{
  min:number=0;
  max:number=1000;
  tempMin:number=0;
  tempMax:number=1000;
  empArray:any[]=[
    {empNo:123,empName:"Deepankar",empEmail:"D@Gmail.com",empGender:"M",empGrade:1,empSalary:100},
    {empNo:124,empName:"swati",empEmail:"S@Gmail.com",empGender:"F",empGrade:2,empSalary:205},
    {empNo:125,empName:"RoHan",empEmail:"R@Gmail.com",empGender:"M",empGrade:3,empSalary:50},
    {empNo:126,empName:"Priya",empEmail:"P@Gmail.com",empGender:"F",empGrade:1,empSalary:800},
    {empNo:127,empName:"Raj",empEmail:"S@Gmail.com",empGender:"M",empGrade:2,empSalary:150},
    {empNo:128,empName:"SwaPnil",empEmail:"Shr@Gmail.com",empGender:"F",empGrade:1,empSalary:454},
    {empNo:129,empName:"Shreya",empEmail:"Swap@Gmail.com",empGender:"F",empGrade:3,empSalary:232},
    {empNo:130,empName:"Rishika",empEmail:"Ris@Gmail.com",empGender:"F",empGrade:2,empSalary:10},
    {empNo:131,empName:"Kunal",empEmail:"K@Gmail.com",empGender:"M",empGrade:3,empSalary:675},
    {empNo:132,empName:"AnAnd",empEmail:"Anand@Gmail.com",empGender:"M",empGrade:1,empSalary:555}
  ];

  manualFilter_click(){
    this.min=this.tempMin;
    this.max=this.tempMax;
  }
}
