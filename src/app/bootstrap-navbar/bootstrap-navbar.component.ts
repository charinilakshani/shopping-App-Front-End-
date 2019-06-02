import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { AuthenticationService } from '../services/authentication.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'bootstrap-navbar',
  templateUrl: './bootstrap-navbar.component.html',
  styleUrls: ['./bootstrap-navbar.component.css']
})
export class BootstrapNavbarComponent implements OnInit {

  constructor(private loginService:AuthenticationService) { }

    ngOnInit() {
     
    }

}
