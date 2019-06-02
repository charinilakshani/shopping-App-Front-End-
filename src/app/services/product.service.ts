import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from '../model/products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  // url = "/api/products";
       url ="http://localhost:8080/products"

  addNewProduct(Products) {
    console.log( Products);
    return this.http.post(this.url,Products);
  }

  updateProduct(Products) {
    console.log("update from front service", this.http.put(this.url, Products));
    return this.http.put(this.url, Products);
  }

  getAllProducts() {
    let username='cha'
    let password='cha'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    console.log("get all products ", this.http.get<Products[]>(this.url, {headers}));
    return this.http.get<Products[]>(this.url);
    // return 
  }

  getOneProducts(pId) {
    console.log("get all products", this.http.get<Products[]>(this.url + `/${pId}`))
    return this.http.get<Products>(this.url + `/${pId}`);
    // return 
  }
}
