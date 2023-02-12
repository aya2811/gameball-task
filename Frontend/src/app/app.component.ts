import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Product } from './Model/product';
import { Subcategory } from './Model/subcategory';
import { Category } from './Model/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  Username = "Olivia Rhye";
  UserAccount = "olivia@evarostudio.com"

  ActiveCategory = '';
  ActiveSubCategory = '';
  sortBy = '';
  orderBy = '';
  page = 1;
  Products:Product[] = []
  Subcategories:Subcategory[] = []
  Categories:Category[] = []

  resetPage(){
    this.page = 1;
  }

  onSelectedCategoryChanged(data: string){
    this.ActiveCategory = data;
    this.resetPage();
    this.fetchSubCategory();
  }

  onSelectedSubCategoryChanged(data: string){
    this.ActiveSubCategory = data;
    this.resetPage();
    this.fetchProducts();
  }

  onSelectedSortChanged(sortBy:string) {
    this.sortBy = sortBy.split('-')[0];
    this.orderBy = sortBy.split('-')[1];
    this.resetPage();
    this.fetchProducts();
  }
  onSelectedPrev(page:number){
    this.page = page ;
    console.log(page)
    this.fetchProducts();

  }
  onSelectedNext(page:number){
    this.page =page;
    console.log(page)
    this.fetchProducts();
  }

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.fetchCategory()

  }
  
  fetchCategory(){
    this.http.get(`http://localhost:5000/api/categories`)
    .pipe(map((res :{[key: string] : Category})=>{
      const categories = [];
      for(const key in res){
        if (res.hasOwnProperty(key))
        {
          categories.push({...res[key],id:key});
        }
      }
      return categories;
    }))
    .subscribe((categories)=>{
      if(categories.length > 0) 
      {this.ActiveCategory = categories[0].name}
      else
      {
        this.ActiveCategory = ''
      }
      this.Categories = categories;
      this.fetchSubCategory();
    })
  }

  fetchSubCategory(){
    this.http.get(`http://localhost:5000/api/subcategories?category=${this.ActiveCategory}`)
    .pipe(map((res :{[key: string] : Subcategory})=>{
      const subcategories = [];
      for(const key in res){
        if (res.hasOwnProperty(key))
        {
          subcategories.push({...res[key],id:key});
        }
      }
      return subcategories;
    }))
    .subscribe((subCategories)=>{
      if(subCategories.length > 0) 
      {this.ActiveSubCategory = subCategories[0].name}
      else
      {
        this.ActiveSubCategory = ''
      }
      this.Subcategories = subCategories;
      this.page = 1;
      this.fetchProducts();
    })
  }
  fetchProducts(){
    this.http.get(`http://localhost:5000/api/products?category=${this.ActiveCategory}&subcategory=${this.ActiveSubCategory}&sortBy=${this.sortBy}&orderBy=${this.orderBy}&limit=2&page=${this.page}`)
    .pipe(map((res :{[key: string] : Product})=>{
      const products = [];
      for(const key in res){
        if (res.hasOwnProperty(key))
        {
          products.push({...res[key],id:key});
        }
      }
      return products;
    }))
    .subscribe((products)=>{
      this.Products = products;
    })
  }
}
