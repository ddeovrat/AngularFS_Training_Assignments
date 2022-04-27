import { Component, OnInit } from '@angular/core';
import {Prod} from '../models/dept'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  prodArray: Prod[] = [
    {pid:10,pname:"Scot",price:10,category:"Beauty",qty:10},
    {pid:11,pname:"Scoty",price:11,category:"Alpha",qty:101},
    {pid:12,pname:"Lenskart",price:20,category:"Eye",qty:10},

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
