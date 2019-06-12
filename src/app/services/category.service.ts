import { Injectable } from '@angular/core';

import { getPluralCategory } from '@angular/common/src/i18n/localization';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { 
  }
  url="/api/category"
  getCategory() {
    console.log("get categroy",this.http.get<Category[]>(this.url));
    return this.http.get<Category[]>(this.url);  
  }
}
