import { Component, Input, OnInit } from '@angular/core';
import {Category} from '../Service/Context';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent{

  @Input()
  prodObj:Category = new Category(); 

}
