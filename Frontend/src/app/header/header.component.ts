import { Component,Input,Output,EventEmitter} from '@angular/core';
import { Subcategory } from '../Model/subcategory';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ActiveSubCategory = 'Fruits';
  sortBy=''
  orderBy=''
  @Input() Username = '' ;
  @Input() ActiveCategory = '';
  @Input() Subcategories:Subcategory[] = [];
  
  @Output()
  SelectedSubCategoryChanged: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  SelectedSortChanged: EventEmitter<string> = new EventEmitter<string>();

  onSelectedSubCategoryChanged(subcategory:string) {
    this.ActiveSubCategory = subcategory;
    this.SelectedSubCategoryChanged.emit(this.ActiveSubCategory);
  }
  onSelectedSortChanged(sortBy:string,orderBy:string) {
    this.sortBy = sortBy;
    this.orderBy = orderBy;
    this.SelectedSortChanged.emit(this.sortBy + '-' + this.orderBy);
  }
}
