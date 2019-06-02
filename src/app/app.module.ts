import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


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
import { CategoryService } from './services/category.service';

import { from } from 'rxjs';
import { ProductService } from './services/product.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { BasicAuthHtppInterceptorService } from './services/basic-auth-interceptor.service';
import { CheckoutService } from './services/checkout.service';


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
    ProductCartComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'my-orders', component: MyOrdersComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'product-form', component: ProductFormComponent },
      { path: 'admin-products', component: AdminProductsComponent },
      { path: 'product-cart/:cartid', component: ProductCartComponent },
      { path: 'admin/products/:pId', component: ProductFormComponent },

      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent },
      { path: 'order-succesful', component: OrderSuccesfulComponent },
      { path: 'bootstrap-navbar', component: BootstrapNavbarComponent },
      { path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService] }


    ])

  ],
  providers: [
    CategoryService,
    ProductService,
    ShoppingCartService,
    AuthenticationService,
    AuthGaurdService,
    BasicAuthHtppInterceptorService,
    CheckoutService,
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
