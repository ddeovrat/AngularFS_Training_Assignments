import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public category:string="";
  prodyctListArray:any[]=[
    {name:"IQOO",category:"Mobile",id:100,price:12999},
    {name:"Samsung",category:"Mobile",id:101,price:12999},
    {name:"Nokia",category:"Mobile",id:102,price:12999},
    {name:"Lenovo",category:"Tablet",id:103,price:12999},
    {name:"HP",category:"Tablet",id:104,price:12999},
    {name:"Dell",category:"Tablet",id:105,price:12999},
  ]
  constructor() { }

  public removeProd(id:number)
  {
    var index = this.prodyctListArray.findIndex((x:any)=>x.id==id);
    this.prodyctListArray.splice(index,1);
  }
  ngOnInit(): void {
  }

}
