import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public productName:string="";
  unitPrice:any="";
  quantity:number=1;
  sum:number=0;
  result:string="";


  public getTotalAmount():void{
    
      this.sum=this.unitPrice*this.quantity;
      this.result= "Total Amount: "+this.sum;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
