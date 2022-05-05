import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _httpObj:HttpClient) { }
  baseUrl:string = "http://localhost:3000/employees/";
  
  public getAllEmployees():Observable<any>
  {
    return this._httpObj.get(this.baseUrl);
  }

  public getEmployeeById(sid:number):any
  {
    return this._httpObj.get(this.baseUrl + sid);
  }

  // Create
  public addEmployee(stObj:any):any
  {
    return this._httpObj.post(this.baseUrl, stObj);
  }

  // Update
  public updateEmployee(stObj:any):any
  {
    return this._httpObj.put(this.baseUrl + stObj.EmployeeId, stObj);
    // return this.httpObj.put(this.baseUrl, stObj);
  }


  // Delete
  public deleteEmployee(sid:number):any
  {
    return this._httpObj.delete(this.baseUrl + sid);
  }

  //New Requirement Code Start Below

  public getEmployeeByJob(designation:string):Observable<any[]>
  {
    return this._httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return  res.filter(item => item.employeeDesignation == designation);
    })
    );
  }

  public getEmployeeNames():Observable<string[]>
  {
    return this._httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return res.map(item => { return item.employeeName });
    })
    );
  }


  public getEmployeeNameAndJob():Observable<any[]>
  {
    return this._httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return res.map(item => {
          return { 	name: item.employeeName, job : item.employeeDesignation} });
    })
    );
  }


  public getManagersByDept(deptNo:number):Observable<any[]>
  {
    return this._httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return  res.filter(item => item.employeeDepartmentNumber == 10 && item.employeeDesignation=="Manager");
    })
    );
  }

  public getEmployeeByDeptNot10():Observable<any[]>
  {
    return this._httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return  res.filter(item => item.employeeDepartmentNumber != 10);
    })
    );
  }

  getSortedEmployee():Observable<any[]>
  {
    return this._httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return res.sort((a, b) => (a.employeeSalary > b.employeeSalary) ? 1 : -1);
    })
    );
  }

  

}
