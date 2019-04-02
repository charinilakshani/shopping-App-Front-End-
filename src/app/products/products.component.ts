import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Products } from '../model/products';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements OnInit {
  products:Products[] =[] ;
  producc;
  filterdProducts: Products[] =[];
 categories$
 category:string;

  constructor( 
       private route:ActivatedRoute,
       private productservice: ProductService,
       categoryservice:CategoryService) {

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

  ngOnInit() {}
 
}

