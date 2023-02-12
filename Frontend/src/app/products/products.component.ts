import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Product } from '../Model/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  @Input() ActiveCategory= '';
  @Input() ActiveSubCategory = '';
  @Input() Products:Product[] = []
  page:number = 1

  @Output()
  SelectedPrev: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  SelectedNext: EventEmitter<number> = new EventEmitter<number>();


  alert() {
    window.alert('Buy was done successfully :)');
  }
  onSelectedPrev(){
    this.page = this.page == 1 ? 1 : this.page-1;
    this.SelectedPrev.emit(this.page);

  }
  onSelectedNext(){
    this.page = this.page == 3 ? 1 : this.page+1;
    this.SelectedNext.emit(this.page);
  }
}
