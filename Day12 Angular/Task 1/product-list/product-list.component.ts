import { Component, OnInit } from '@angular/core';
import {Category} from '../Service/Context';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {
  public category:string="";
  public groupCategory=["Mobile","Tablet","Appliances"];
  
}
