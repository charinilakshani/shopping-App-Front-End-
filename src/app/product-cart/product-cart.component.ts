import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../model/products';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  @Input('products') products:Products;
  @Input('show-actions') showActions =true;

  constructor( private cartservice:ShoppingCartService) { 
    
  }
  
  ngOnInit() { }

  addToCart(){
    console.log("add to cart")
    let cartId =localStorage.getItem('cartId');
    console.log(" local storage",cartId);
    if(!cartId) {
  
        // this.cartservice.createCartId(products).then(result =>{
        // localStorage.setItem('cartId',result.cartId)

      
// // add products to cart
//       )} else{
// // add products to cart
//     }
  
  }
  
}
}
