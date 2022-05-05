import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  id:number=0;
  name:string  = "";
  city:string  = "";
  designation:string="";
  salary:string="";
  departmentNumber:number=0;

  EmployeeId:number = 0;

  constructor(private _dalservice: EmployeeService) { }
  EmployeesArray:any[]=[];
  getData_click()
  {
    this._dalservice.getAllEmployees().subscribe((resData:any)=>
    {
      this.EmployeesArray = resData;
    });
  }
  addData_click() {
    let empObj:any = {};
    empObj.employeeId = this.id;
    empObj.employeeName = this.name;
    empObj.employeeCity = this.city;
    empObj.employeeDesignation = this.designation;
    empObj.employeeSalary = this.salary;
    empObj.employeeDepartmentNumber = this.departmentNumber;

    console.log(empObj);

    this._dalservice.addEmployee(empObj).subscribe( (resData:any) =>
    {
      // alert("New Employee details are added to database");
      alert(resData.result)
      this.getData_click();
    });
  }

  updateData_click() {
    let empObj:any = {};
    empObj.employeeId = this.id;
    empObj.employeeName = this.name;
    empObj.employeeCity = this.city;
    empObj.employeeDesignation = this.designation;
    empObj.employeeSalary = this.salary;
    empObj.employeeDepartmentNumber = this.departmentNumber;

    this._dalservice.updateEmployee(empObj).subscribe( (resData:any) =>
    {
      // alert("Employee details are update to database");
      alert(resData.result)
      this.getData_click();
    });
  }

  deleteData_click(eid:number) {

    this._dalservice.deleteEmployee(eid).subscribe( (resData:any) =>
    {
      alert(resData.result)
      this.getData_click();
    });

  }

  selectData_click(eid:number) {

    this.EmployeeId = eid;

    this._dalservice.getEmployeeById(eid).subscribe( (resData:any) =>
    {
      this.name = resData.EmployeeName;
      this.city = resData.EmployeeCity;
    });
  }
  clearFields() {
    this.name = "";
    this.city = "";
  }

  ngOnInit(): void {
  }

  
  //New Requirement Codes Below


  result: any[] = [];

  getData2_click()
  {
    this._dalservice.getManagersByDept(10).subscribe(resData =>
      {
        this.result = resData;
      });
  }

  getData3_click()
  {
      this._dalservice.getEmployeeNameAndJob().subscribe(resData =>
      {
        this.result = resData;
      });
  }

  getData4_click()
  {
      this._dalservice.getEmployeeByDeptNot10().subscribe(resData =>
      {
        this.result = resData;
      });
  }

  getData5_click()
  {
      this._dalservice.getSortedEmployee().subscribe(resData =>
      {
        this.result = resData;
      });
  }
}
