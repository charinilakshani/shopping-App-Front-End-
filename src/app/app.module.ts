import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule  }  from'@angular/router';
import { NgbModule } from'@ng-bootstrap/ng-bootstrap';
import{ FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { BootstrapNavbarComponent } from './bootstrap-navbar/bootstrap-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccesfulComponent } from './order-succesful/order-succesful.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';

import { from } from 'rxjs';
import { ProductService } from './product.service';
import{HttpClientModule} from'@angular/common/http';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ShoppingCartService } from './shopping-cart.service';


@NgModule({
  declarations: [
    AppComponent,
    BootstrapNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccesfulComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    DropdownComponent,
    ProductFormComponent,
    ProductCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
  {path: '',component:ProductsComponent},
  {path: 'my-orders',component:MyOrdersComponent},
  {path:'products',component:ProductsComponent},
  {path:'product-form',component:ProductFormComponent},
  {path:'admin-products',component:AdminProductsComponent},
  {path:'admin/products/:aid',component:ProductFormComponent},

])

  ],
  providers: [
  CategoryService,
  ProductService,
  ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
