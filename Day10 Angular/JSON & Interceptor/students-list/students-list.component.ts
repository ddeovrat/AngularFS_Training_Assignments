import { Component, OnInit } from '@angular/core';
import { DalService } from '../dal.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  id:number=0;
  name:string  = "";
  city:string  = "";

  studentId:number = 0;

  constructor(private _dalservice: DalService) { }
  studentsArray:any[]=[];
  getData_click()
  {
    this._dalservice.getAllStudents().subscribe((resData:any)=>
    {
      this.studentsArray = resData;
    });
  }
  addData_click() {
    let stObj:any = {};
    stObj.studentId = this.id;
    stObj.studentName = this.name;
    stObj.studentCity = this.city;

    console.log(stObj);

    this._dalservice.addStudent(stObj).subscribe( (resData:any) =>
    {
      // alert("New Student details are added to database");
      alert(resData.result)
      this.getData_click();
    });
  }

  updateData_click() {
    let stObj:any = {};
    stObj.studentId = this.id;
    stObj.studentName = this.name;
    stObj.studentCity = this.city;
    console.log(stObj);

    this._dalservice.updateStudent(stObj).subscribe( (resData:any) =>
    {
      // alert("Student details are update to database");
      alert(resData.result)
      this.getData_click();
    });
  }

  deleteData_click(sid:number) {

    this._dalservice.deleteStudent(sid).subscribe( (resData:any) =>
    {
      alert(resData.result)
      this.getData_click();
    });

  }

  selectData_click(sid:number) {

    this.studentId = sid;

    this._dalservice.getStudentById(sid).subscribe( (resData:any) =>
    {
      this.name = resData.studentName;
      this.city = resData.studentCity;
    });
  }
  clearFields() {
    this.name = "";
    this.city = "";
  }
  ngOnInit(): void {
  }

}
