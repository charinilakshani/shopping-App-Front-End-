import { Component, OnInit, OnDestroy } from '@angular/core';
import { Products } from '../model/products';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Subscription } from 'rxjs';
import { Cart } from '../model/cart';
import { ProductService } from '../services/product.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements OnInit,OnDestroy {
  products:Products[] =[] ;
  producc;
  filterdProducts: Products[] =[];
 categories$
 category:string;
 cartId:  Cart[];
 cart:any;
 subscription:Subscription;

  constructor( 
       private route:ActivatedRoute,
       private productservice: ProductService,
       categoryservice:CategoryService,
      private  shoppingCartService:ShoppingCartService) {


      

        

   this.categories$ = categoryservice.getCategory();
   
   this.productservice.getAllProducts()
    .subscribe(products =>{
        this.products = products;
       route.queryParamMap.subscribe(param => {
        this.category = param.get('category');
        this.filterdProducts =(this.category)?
        this.products.filter(p => p.category === this.category):
        this.products;
      });
      console.log("fproudcts",   this.filterdProducts);
      console.log(this.products);
    });
   
   }

  ngOnInit() {
    // console.log("cart IDdddddddddddddddddddddddddddd",this.cartId);
    // this.subscription= (  this.shoppingCartService.getCart( this.cartId)).subscribe(cart =>
    //   this.cart);
  }
  ngOnDestroy(){
    // this.subscription.unsubscribe();
  }
 
}

