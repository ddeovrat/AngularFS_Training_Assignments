import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {
  public empId:number = 54654564;
  public empName:string = "Stephen";
  public empJob:string = "Manager";
  public empSalary:number = 75000;
  public empDept:number = 10;
}
