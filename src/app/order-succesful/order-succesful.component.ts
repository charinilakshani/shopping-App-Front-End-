import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Cart } from '../model/cart';
import { AuthenticationService } from '../services/authentication.service';
import { RegisterUser } from '../model/registerUser';

@Component({
  selector: 'app-order-succesful',
  templateUrl: './order-succesful.component.html',
  styleUrls: ['./order-succesful.component.css']
})
export class OrderSuccesfulComponent implements OnInit {
  cartList 
  cartLength
  total = 0;
  userId;
  cartItem

  constructor(  private cartservice:ShoppingCartService,
   private authenticationservice:AuthenticationService) { 
    
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

      this.cartservice.getbyuserId(registerUser.userId).subscribe(res => {
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

addToHistory(){
  console.log(" check out")
  this.cartservice.addToHistory(this.cartList).subscribe(res =>{
    console.log("added to check out",res)
    this.deleteAllCart();
    this.deleteOrderSussfull();
  })
}


deleteAllCart(){
  let user = sessionStorage.getItem('email');
  this.authenticationservice.authenticated(user).subscribe(data => {
    this.userId = data;
    let registerUser = <RegisterUser>new Object();
    registerUser.userId = this.userId.userId;
   
    this.cartservice.deleteByUserId(registerUser.userId).subscribe(res =>{
      console.log("Delete all sussfull")
    })
})

}

deleteOrderSussfull(){
  let user = sessionStorage.getItem('email');
  this.authenticationservice.authenticated(user).subscribe(data => {
    this.userId = data;
    let registerUser = <RegisterUser>new Object();
    registerUser.userId = this.userId.userId;
   
    this.cartservice.deleteAllCheckOut(registerUser.userId).subscribe(res =>{
      console.log("Delete all sussfull")
    })
})

}
}
 
  
