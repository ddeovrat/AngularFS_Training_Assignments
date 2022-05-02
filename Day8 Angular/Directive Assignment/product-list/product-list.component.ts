import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public displayMode:string ="Table";
  public productsArray: any[] = [
    {pid:1001,pname:"Speakers",brand:"Bose",price:20000,picture:"assets/pic1.jpg"},
    {pid:1002,pname:"Watch",brand:"Noise",price:3000,picture:"assets/pic2.jpg"},
    {pid:1003,pname:"Mobile",brand:"Nokia",price:4000,picture:"assets/pic3.jpg"},
    {pid:1004,pname:"Earbuds",brand:"Samsung",price:2000,picture:"assets/pic1.jpg"},
    {pid:1005,pname:"Headset",brand:"Boat",price:20500,picture:"assets/pic2.jpg"},
    {pid:1006,pname:"SmartSpec",brand:"Lenskart",price:22000,picture:"assets/pic1.jpg"}
  ];

  public clickImage(input:string)
  {
    this.displayMode=input;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
