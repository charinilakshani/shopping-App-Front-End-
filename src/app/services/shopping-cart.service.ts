import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Cart } from '../model/cart';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }
 
  // url="/api/carts";
  url ="http://localhost:8080/user/carts"
  url1 ="http://localhost:8080/user/checkOut"
  cartitem:Cart
  
  getCartOnebyOne(cartid){
    console.log(" get one cart item from back end ", this.http.get<Cart[]>(this.url + `/${cartid}`))
   
    return this.http.get<Cart[]>(this.url + `/${cartid}`);
  }
  getoneaddTocartProduct(pId){
    console.log("get all products", this.http.get<Cart[]>(this.url + `/${pId}`))
    return this.http.get<Cart>(this.url+ `/${pId}`);

  }

  getAllCart(){
    return this.http.get<Cart[]>(this.url) ;
  }
  
   addToCart(products){
    console.log(" cart id from service",products);
    return this.http.post<Cart>(this.url, products).subscribe(cart => {  
          }, err=>{
            console.log("adding failed"+ products.productName + err);
          })
   }
  
getbyuserId(userId){
  console.log("get all products",userId)
  return this.http.get<Cart>(this.url+ `/${userId}`);

}
   removeFromCart(pId){
    console.log(" remove cart ",pId);
    return this.http.delete(this.url+pId);

   }
   addItemsToCart(cartItems : Cart[]) {

    return this.http.post<Cart> (this.url+"add/items", cartItems);

  }
  // addToCart(cartitem){
  //    let Id = cartitem.cartId;
  //    console.log("cart Id",Id);
  
  //   let  cartId = localStorage.getItem('cartId');
  //   console.log("cart id from local storage",cartId);
  //   if(!cartId) {
  //     console.log("not empty");
  //     return this.http.post<Cart>(this.url1, cartitem).subscribe(cart => {
      
  //     }, err=>{
  //       console.log("adding failed"+ cartitem.productName + err);
  //     })

  //   } else {
  //     console.log(" working perfectly");
  //   }

  getOrderHisotry(userId){
    console.log("get all products",userId)
    return this.http.get<Cart>(this.url1+ `/${userId}`);
  
  }

  
  addToHistory(cartItems : Cart[]) {
    return this.http.post<Cart> (this.url1, cartItems);

  }
 
  }



