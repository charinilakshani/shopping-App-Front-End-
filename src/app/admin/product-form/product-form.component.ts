import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy {

  category;
  products = {};
  subsription;
  pId;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    categoryservice: CategoryService,
    private productservice: ProductService,
  ) {
    // categoryservice.getCategory().subscribe(res => {
    //   this.category = res;
    // });

    this.pId = this.route.snapshot.paramMap.get('pId');
    console.log(" product form  product Id ", this. pId)
    if (this.pId)
      productservice.getOneProducts(this.pId).pipe(take(1)).subscribe(p => this.products = p)

  }
  save(products) {
    console.log("pId", this.pId);

    if (this.pId) {
      this.productservice.updateProduct(products).subscribe(data => {
        console.log(" update product", data);
      });

    } else {
      this.productservice.addNewProduct(products).subscribe(data => {
        console.log(" add new product", data);
      });
    }
  }
  ngOnInit() { }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }


}
