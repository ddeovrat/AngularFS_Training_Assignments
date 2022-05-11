import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  constructor() { }

  deptsArray:any[] = [
    {deptno : 100, dname : "CSE",  loc :  "Hyd"} ,
    {deptno : 101, dname : "ECE",  loc :  "Pune"},
    {deptno : 102, dname : "Civil",  loc :  "Hyd"}
  ];

  public addDept(deptObj:any){
    this.deptsArray.push(deptObj);
   
  }

  public removeDept(id:number){

    let index = this.deptsArray.findIndex(x => x.deptno ==id);
    this.deptsArray.splice(index, 1);
    return this.deptsArray.length;
  }
}
