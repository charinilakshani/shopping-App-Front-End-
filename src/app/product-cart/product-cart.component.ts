import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../model/products';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Cart } from '../model/cart';

import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import { AuthenticationService } from '../services/authentication.service';
import { RegisterUser } from '../model/registerUser';

@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent  {
  @Input('products') products: Products;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart;
  cart: Cart ;
  cart1: {};
  cartid;
  productss
  userId
  cartItem
  cartList
  total = 0; 
  cartLength

    constructor(private router: Router,
      private route: ActivatedRoute,
      private cartservice: ShoppingCartService,
      private productservice: ProductService,
      private authenticationservice:AuthenticationService) {


      
    }

    addToCart(products:Products){
      let user = sessionStorage.getItem('email')

      console.log("user Idd",user);
      this.authenticationservice.authenticated(user).subscribe(data => {
        this.userId = data;
        let registerUser = <RegisterUser>new Object();
        registerUser.userId = this.userId.userId;
  
        console.log("products",products);
        let cart =<Cart> new Object();
        cart.pId = products.pId;
        cart.userId =registerUser.userId;
        cart.quantity = 1;
        cart.productName = products.productName;
        cart.price = products.price;
        cart.productImage =products.image;
      
        this.cartservice.addToCart(cart);

        this.cartservice.getbyuserId(registerUser.userId).subscribe(res => {
          this.cartItem = res;
          let cart =<Cart> new Object();
          cart.quantity =this.cartItem.quantity;

          console.log("cart length",cart)
       
  
        })
  
  
        })
  
  
        // this.cartservice.addToCart(cart);
      }
     
    

  getQuqantity() {

    
     




     

     
  
    
 let cartLenth = 4
   

    // let item =this.shoppingCart[this.products.pId]
    // console.log("get item");
    //  return cartLenth;
  }
  

  removeFromCart(products:Products){
    let user = sessionStorage.getItem('email')

    console.log("user Idd",user);
    this.authenticationservice.authenticated(user).subscribe(data => {
      this.userId = data;
      let registerUser = <RegisterUser>new Object();
      registerUser.userId = this.userId.userId;
    
    console.log("products",products);
      let cart =<Cart> new Object();
      cart.pId = products.pId;
      cart.userId =registerUser.userId;
      cart.quantity = -1;
      cart.productName = products.productName;
      cart.price = products.price;
      cart.productImage =products.image;
      this.cartservice.addToCart(cart);

  })
}


}

  



