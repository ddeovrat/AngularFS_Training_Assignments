import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Category} from '../Service/Context';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  prodObj:any[]=[];
  constructor(private route:ActivatedRoute){}
  prodyctListArray:Category[]=[
    {name:"IQOO",category:"Mobile",id:100,price:12999},
    {name:"Samsung",category:"Mobile",id:101,price:12999},
    {name:"Nokia",category:"Mobile",id:102,price:12999},
    {name:"Lenovo",category:"Tablet",id:103,price:12999},
    {name:"HP",category:"Tablet",id:104,price:12999},
    {name:"Dell",category:"Tablet",id:105,price:12999},
    {name:"Philips Trimmer",category:"Appliances",id:105,price:12999},
    {name:"Charger",category:"Appliances",id:105,price:12999},
  ]

  ngOnInit(): void {
    let selectedCategory  =this.route.snapshot.params["category"];
    // Make ajax call to get the data from the server
    this.prodObj = this.prodyctListArray.filter(item => item.category == selectedCategory); 
  }
}
