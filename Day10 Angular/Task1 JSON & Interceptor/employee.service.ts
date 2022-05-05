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
  

}
