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
  url1 = "http://localhost:8080/add";
  url2 ="http://localhost:8080";
  url3 = "http://localhost:8080/update";


  create(products: Products) {
    return this.http.post<Products>(this. url1+"add products to database", products).
            subscribe(products => {
              console.log(products.productName + " sucessfully added")
            },
            error => {
              console.log(products.productName + "not workinggggggggggggggggggggggg"+ error)
            });
  }
 
  addNewProduct(products) {
    let sendProduct = {
      productName: products.productName,
      category:products.category,
      price: products.price,
      quntity:products. number,
      description:products.description,
      image: products.image,
  
    };
    console.log(" send new product",sendProduct);
    return this.http.post(this. url2, sendProduct);
  }

  updateProduct(Products) {
    console. log("update from front service",this.http.put(this.url3, Products));
    return this.http.put(this.url3, Products);
  }

  getAllProducts() {
    console.log("get all products ", this.http.get<Products[]>(this.url));
    return this.http.get<Products[]>(this.url);
    // return 
  }

  getOneProducts(pid) {
  console.log("get all products", this.http.get<Products[]>(this.url2 +  `/${pid}`))
    return this.http.get<Products>(this.url2 + `/${pid}`);
    // return 
  }

}
