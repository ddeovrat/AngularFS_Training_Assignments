import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DalService {

  constructor(private _httpObj:HttpClient) { }
  baseUrl:string = "http://localhost:3000/students/";
  
  public getAllStudents():Observable<any>
  {
    return this._httpObj.get(this.baseUrl);
  }

  public getStudentById(sid:number):any
  {
    return this._httpObj.get(this.baseUrl + sid);
  }

  // Create
  public addStudent(stObj:any):any
  {
    return this._httpObj.post(this.baseUrl, stObj);
  }

  // Update
  public updateStudent(stObj:any):any
  {
    return this._httpObj.put(this.baseUrl + stObj.studentId, stObj);
    // return this.httpObj.put(this.baseUrl, stObj);
  }


  // Delete
  public deleteStudent(sid:number):any
  {
    return this._httpObj.delete(this.baseUrl + sid);
  }

}
