import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products

  // products;
  subscription: Subscription;
  filterdProducts: any[];
  constructor(private productservice: ProductService) {
    this.products = this.productservice.getAllProducts();
    console.log("dddd", this.products);
    this.subscription = this.productservice.getAllProducts().subscribe(products =>
    this.filterdProducts = this.products = products);
     }
  
  ngOnInit() { }

  filter(query: string) {
    this.filterdProducts = (query) ?
      this.products.filter(p => p.category.includes(query)) :
      this.products
        console.log("query value", query);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();

  }
}


