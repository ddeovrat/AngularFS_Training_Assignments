import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public todoArray:any[]=[];
  public getTodoData():any[]
  {
    return this.todoArray;
  }
  public addTodoData(obj:Object):any[]
  {
    this.todoArray.push(obj);
    return this.todoArray;
  }
  public removeTodoData(id:number):any[]
  {
    this.todoArray= this.todoArray.filter(item=>item.id!=id);
    return this.todoArray;
  }
  public updateTodoData(id:number):any[]
  {
    let obj:any = this.todoArray.find(item => item.id == id);
    if(obj.check==false){
      obj.check=true;
    }
    else{
      obj.check=false;
    }  
    return this.todoArray;
  }

  public deleteDoneTask():any[]
  {
    this.todoArray= this.todoArray.filter(item=>item.check==false);
    return this.todoArray;
  }
  public deleteAllTask():any[]
  {
    this.todoArray=[];
    return this.todoArray;
  }
  constructor() { }
}
