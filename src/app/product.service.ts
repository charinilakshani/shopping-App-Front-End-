import { Injectable } from '@angular/core';
import { Products } from './model/products';
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:8080/all";
  url1 = "http://localhost:8080/addProduct";
  url2 = "http://localhost:8080";
  url3 = "http://localhost:8080/update";

  addNewProduct(Products) {
    console.log( Products);
    return this.http.post(this.url1,Products);
  }

  updateProduct(Products) {
    console.log("update from front service", this.http.put(this.url3, Products));
    return this.http.put(this.url3, Products);
  }

  getAllProducts() {
    console.log("get all products ", this.http.get<Products[]>(this.url));
    return this.http.get<Products[]>(this.url);
    // return 
  }

  getOneProducts(pid) {
    console.log("get all products", this.http.get<Products[]>(this.url2 + `/${pid}`))
    return this.http.get<Products>(this.url2 + `/${pid}`);
    // return 
  }

}
