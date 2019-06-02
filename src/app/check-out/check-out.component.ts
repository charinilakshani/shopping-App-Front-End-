import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Cart } from '../model/cart';
import { RegisterUser } from '../model/registerUser';
import { AuthenticationService } from '../services/authentication.service';
import { CheckoutService } from '../services/checkout.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  cartList 
  cartLength
  total = 0;
  userId;
  cartItem

  constructor(  private cartservice:ShoppingCartService,
   private authenticationservice:AuthenticationService,
   private checkoutservice:CheckoutService) { 
    
  // 

  }
  ngOnInit() {
    // this.cartservice.getAllCart().subscribe(res => {
    //     this.cartList = res;
    //     this.cartLength = this.cartList.length;
    //     this.calcTotal();
    //   })

    let user = sessionStorage.getItem('email')

    this.authenticationservice.authenticated(user).subscribe(data => {
      this.userId = data;
      let registerUser = <RegisterUser>new Object();
      registerUser.userId = this.userId.userId;

      this.cartservice.getOrderHisotry(registerUser.userId).subscribe(res => {
        this.cartList = res;
        this.cartLength = this.cartList.length;
        this.calcTotal();

      })

  })
}
calcTotal() {
  for(let cartItem of this.cartList){
    this.total = cartItem.quantity*cartItem.price + this.total;
  }
}



}
