import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-assignment',
  templateUrl: './binding-assignment.component.html',
  styleUrls: ['./binding-assignment.component.css']
})
export class BindingAssignmentComponent  {

  productName:string="";
  unitPrice:number=0;
  quantity:number=0;
  sum:number=0;

  public calculate():void{
    this.sum=this.unitPrice*this.quantity;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
