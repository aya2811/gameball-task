import { Component,Input,EventEmitter, Output } from '@angular/core';
import { Category } from '../Model/category';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input() Username = '' ;
  @Input() UserAccount = '';
  @Input() Categories:Category[] =[] 
  activeCategory = 'Food';
  @Output()
  SelectedCategoryChanged: EventEmitter<string> = new EventEmitter<string>();

  onSelectedCategoryChanged(category:string) {
    this.activeCategory = category;
    this.SelectedCategoryChanged.emit(this.activeCategory);
  }
}
