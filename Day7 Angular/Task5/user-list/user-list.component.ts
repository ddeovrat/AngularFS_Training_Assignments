import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  empName:string="";
  empNo:number=0;
  empSalary:number=0;

  public empsArray:any[]=[];
  constructor(private _dataService:DataserviceService) { }

  addData_click()
  {
    this.empsArray= this._dataService.addEmpData({empNo:this.empNo,empName:this.empName,empSalary:this.empSalary});
  }
  getData_click()
  {
    this.empsArray= this._dataService.getEmpData();
  }

  removeData_click()
  {
    this.empsArray = this._dataService.removeEmpData(this.empNo);
  }

  ngOnInit(): void {
    this.getData_click()
  }

}
