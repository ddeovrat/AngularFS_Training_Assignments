import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {Employee} from '../Service/Context';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit,OnChanges {
  @Input()
  public sortOrder:string="";
  empArray:Employee[]=[
    {empId:101,empName:"Mohan"},
    {empId:102,empName:"Rohan"},
    {empId:104,empName:"Sohan"},
    {empId:103,empName:"Lohan"},
    {empId:105,empName:"Alpha"}
  ]
  filteredArray:Employee[]=[];

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges()
  {
    alert(this.sortOrder);
    if(this.sortOrder=="Id")
    {
      alert("Inside first conditioon")
      //products.sort((a,b)=>a.title.rendered > b.title.rendered)
      this.filteredArray = this.empArray.sort((x,y)=>{return x.empId-y.empId});
    }
    else
    {
      this.filteredArray = this.empArray.sort((a,b)=>{
        let var1 = a.empName.toLowerCase(), var2 = b.empName.toLowerCase();
        if(var1<var2){
          return -1;
        }
        if(var2>var1){
          return 1;
        }
        return 0;
      });

    }

  }
}
