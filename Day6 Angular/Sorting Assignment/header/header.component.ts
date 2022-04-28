import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  onSortingChanged:EventEmitter<string>=new EventEmitter();
  selectedOrder:string="";
  constructor() { }

  ngOnInit(): void {
  }

  sortingOrder_Change()
  {
    this.onSortingChanged.emit(this.selectedOrder);
  }

}
