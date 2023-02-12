import { Component ,Input,Output,EventEmitter} from '@angular/core';
import { Product } from '../Model/product';
import { Subcategory } from '../Model/subcategory';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @Input() Username='';
  @Input() ActiveCategory='';
  @Input() Products:Product[] = [];
  @Input() Subcategories:Subcategory[] = [];
  ActiveSubCategory = '';
  sortBy ='' ;
  orderBy = '';
  page = 1;


  @Output()
  SelectedSubCategoryChanged: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  SelectedSortChanged: EventEmitter<string> = new EventEmitter<string>();
  
  @Output()
  SelectedPrev: EventEmitter<number> = new EventEmitter<number>();
  
  @Output()
  SelectedNext: EventEmitter<number> = new EventEmitter<number>();
  
  onSelectedSubCategoryChanged(subcategory:string) {
    this.ActiveSubCategory = subcategory;
    this.SelectedSubCategoryChanged.emit(this.ActiveSubCategory);
  }
  
  onSelectedSortChanged(sortBy:string) {
    this.sortBy = sortBy;
    this.SelectedSortChanged.emit(this.sortBy);
  }

  onSelectedPrev(page:number){
    this.page = page ;
    this.SelectedPrev.emit(this.page);

  }
  onSelectedNext(page:number){
    this.page =page;
    this.SelectedNext.emit(this.page);
  }
}
