import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  url ="http://localhost:8080/user/checkOut"
  cartitem:Cart

  constructor(private http: HttpClient) { }


  getOrderHisotry(userId){
    console.log("get all products",userId)
    return this.http.get<Cart>(this.url+ `/${userId}`);
  
  }

  addToHistory(cartItems : Cart[]) {
    return this.http.post<Cart> (this.url, cartItems);

  }
}
