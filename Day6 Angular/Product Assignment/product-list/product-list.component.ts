import { Component, OnInit } from '@angular/core';
import {Category} from '../Service/Context';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {
  public category:string="";
  prodyctListArray:Category[]=[
    {name:"IQOO",category:"Mobile",id:100,price:12999},
    {name:"Samsung",category:"Mobile",id:101,price:12999},
    {name:"Nokia",category:"Mobile",id:102,price:12999},
    {name:"Lenovo",category:"Tablet",id:103,price:12999},
    {name:"HP",category:"Tablet",id:104,price:12999},
    {name:"Dell",category:"Tablet",id:105,price:12999},
  ]


}
