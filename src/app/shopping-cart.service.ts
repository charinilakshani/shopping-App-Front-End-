import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './model/products';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  url1 ="";

  constructor(private http: HttpClient) { }

  create( ) {
   
   
  //   subscribe(products => {
  //     console.log(products.productName + " sucessfully added")
  //   },
  //   error => {
  //     console.log(products.productName + "not workinggggggggggggggggggggggg"+ error)
  //   });

  }


  createCartId(products) {
    let sendProduct = {
      productName: products.productName,
      category:products.category,
      price: products.price,
      quntity:products. number,
      description:products.description,
      image: products.image,
  
    };
    console.log(" send new product",sendProduct);
    // return this.http.post(this. url2, sendProduct);
  }
}
