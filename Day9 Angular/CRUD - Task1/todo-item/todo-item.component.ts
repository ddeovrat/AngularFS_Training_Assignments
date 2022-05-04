import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  public todoArray:any[]=[];
  public flag:boolean=false;
  public id:number=0;
  public task:string="";
  private _tempId:number=0;
  public taskToDo:string="";
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.todoArray=this._dataService.getTodoData();
  }
  addData_click(){
    this._tempId+=1;
    this.todoArray= this._dataService.addTodoData({id:this._tempId,task:this.taskToDo,check:false});
  
  }
  removeTodoData(idPass:number){
    this.todoArray = this._dataService.removeTodoData(idPass);
  }

  updateTodoData(idPass:number){
    alert(idPass);
    this.todoArray=this._dataService.updateTodoData(idPass);
  }

  // onCheckboxChange(idPass:number){
  //   if(this.flag==true){
  //     this.flag=false;
  //   }
  //   else
  //     this.flag=true;
  // }

  deleteDoneTask(){
    this.todoArray=this._dataService.deleteDoneTask();
  }
  deleteAllTask(){
    this.todoArray=this._dataService.deleteAllTask();
  }

}
