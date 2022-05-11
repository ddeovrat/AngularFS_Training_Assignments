import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input()
  public prodObj:any = {};
  @Output() 
  onProdRemoved = new EventEmitter<number>();
  public remove(id:number)
  {
    this.onProdRemoved.emit(id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
