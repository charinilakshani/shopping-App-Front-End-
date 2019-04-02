import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy {

  category;
  products = {};
  subsription;
  aid;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    categoryservice: CategoryService,
    private productservice: ProductService,
  )
   {
    categoryservice.getCategory().subscribe(res => {
      this.category = res;
    });

    this.aid = this.route.snapshot.paramMap.get('aid');
    if (this.aid)
      productservice.getOneProducts(this.aid).pipe(take(1)).subscribe(p => this.products = p)

  }
  save(products) {
    console.log("aid",this.aid);
    if(this.aid){
      console.log("workign",this.aid);
      this.productservice.updateProduct(products);

    } else {
      this.productservice.addNewProduct(products);
       console.log("products from ", products);
    }  
  }
  ngOnInit() {}
  
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }


}
