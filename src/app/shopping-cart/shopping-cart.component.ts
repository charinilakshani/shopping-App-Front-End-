import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Cart } from '../model/cart';
import { Products } from '../model/products';
import { AuthGaurdService } from '../services/auth-gaurd.service';
import { AuthenticationService } from '../services/authentication.service';
import { RegisterUser } from '../model/registerUser';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cartservice: ShoppingCartService,
    private authenticationservice: AuthenticationService) { }
  product: Products;
  quantity: number;
  allCartDetails: Cart[] = [];
  itemList = [];
  totalprice: number;
  cartItems
  total = 0
  userId;
  cartLength
  cartList

  ngOnInit() {
    let user = sessionStorage.getItem('email')

    this.authenticationservice.authenticated(user).subscribe(data => {
      this.userId = data;
      let registerUser = <RegisterUser>new Object();
      registerUser.userId = this.userId.userId;

      this.cartservice.getbyuserId(registerUser.userId).subscribe(data => {
      this.cartItems = data;

      })

      this.cartservice.getbyuserId(registerUser.userId).subscribe(res => {
        this.cartList = res;
        this.cartLength = this.cartList.length;

        console.log("cart length",this.cartLength)
        this.calcTotal();

      })
      // this.cartservice.addToCart(cart);
    }
    )

    // this.cartItems = (this.userId) ? this.products.filter(p=>p.pName.toLowerCase().includes(query.toLowerCase()) || p.pDescription.toLowerCase().includes(query.toLowerCase())) : this.products;

    // this.totalPrice();
    // })   
  }

  public getAllCartDetails() {
    let user = sessionStorage.getItem('username')
    console.log("user Id", user);

    this.cartservice.getAllCart().subscribe(cart => {
      this.allCartDetails = cart;
      console.log("djddjb", this.allCartDetails);
    })
  }


  deleteCartItem(pid) {
    // this.cartservice.removeFromCart(pid).subscribe(res => this.cartItems = <Cart[]>res);

  }
  getQuqantity() {

  }

  addToCart(products:Products){
    let user = sessionStorage.getItem('email')

    console.log("user Idd",products);
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
    
      this.cartservice.addToCart(cart);

      let user = sessionStorage.getItem('email')

      this.authenticationservice.authenticated(user).subscribe(data => {
        this.userId = data;
        let registerUser = <RegisterUser>new Object();
        registerUser.userId = this.userId.userId;
  
        this.cartservice.getbyuserId(registerUser.userId).subscribe(data => {
        this.cartItems = data;

        


      })


      // this.cartservice.addToCart(cart);
    })
   
  })
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
        this.cartservice.addToCart(cart);
        let user = sessionStorage.getItem('email')

        this.authenticationservice.authenticated(user).subscribe(data => {
          this.userId = data;
          let registerUser = <RegisterUser>new Object();
          registerUser.userId = this.userId.userId;
    
          this.cartservice.getbyuserId(registerUser.userId).subscribe(data => {
          this.cartItems = data;
          this.cartLength = this.cartList.length;
        this.calcTotal();

  
    })
  })
})
  }


  calcTotal() {
    for(let cartItem of this.cartList){
      this.total = cartItem.quantity*cartItem.price + this.total;
    }
  }


  onQtyChange(units, i) {
    if (units != null)
      this.cartItems[i].quantity = units;
    this.total = 0
    this.cartservice.addItemsToCart(this.cartItems).subscribe(res => {
      console.log(res);
    })
  
  }
  

   
  
}
