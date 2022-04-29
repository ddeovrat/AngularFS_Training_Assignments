import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent
{
  empArray:any[]=[
    {empNo:123,empName:"Deepankar",empEmail:"D@Gmail.com",empGender:"M",empGrade:1},
    {empNo:124,empName:"swati",empEmail:"S@Gmail.com",empGender:"F",empGrade:2},
    {empNo:125,empName:"RoHan",empEmail:"R@Gmail.com",empGender:"M",empGrade:3},
    {empNo:126,empName:"Priya",empEmail:"P@Gmail.com",empGender:"F",empGrade:1},
    {empNo:127,empName:"Raj",empEmail:"S@Gmail.com",empGender:"M",empGrade:2},
    {empNo:128,empName:"SwaPnil",empEmail:"Shr@Gmail.com",empGender:"F",empGrade:1},
    {empNo:129,empName:"Shreya",empEmail:"Swap@Gmail.com",empGender:"F",empGrade:3},
    {empNo:130,empName:"Rishika",empEmail:"Ris@Gmail.com",empGender:"F",empGrade:2},
    {empNo:131,empName:"Kunal",empEmail:"K@Gmail.com",empGender:"M",empGrade:3},
    {empNo:132,empName:"AnAnd",empEmail:"Anand@Gmail.com",empGender:"M",empempGrade:1},

  ]

  start:number=0;
  end:number=4;
  isShow:boolean=false;
  nextItems_click(){
    if(this.end>=this.empArray.length)
    {
      this.isShow=true;
    }
    else{
      this.start=this.end;
      this.end+=4;
    }
  }
}
