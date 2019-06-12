import { Injectable } from '@angular/core';

import { RegisterUser } from '../model/registerUser';
import { map } from 'rxjs/operators';

import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // url = "http://localhost:8080/user/"
  url = "/api/user/";

  constructor( private http :HttpClient) { }
  

  authenticate(email:string, password:string) {
    return this.http.get(this.url+email);
  }

  authenticated(email:string) {
    return this.http.get(this.url+email);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(" is userrrr",  !(user === null))
    return !(user === null)
  }

  isadminiIsLoggedIn() {
    let userType = sessionStorage.getItem('type')
      if(userType ==='user')  {
       return true;

    } else(userType ==='admin')
    {
      return false;
    }

    
  }

  isUserLogIn() {
    let userType = sessionStorage.getItem('type')
      if(userType ==='admin')  {
       return true;

    } else(userType ==='user')
    {
      return false;
    }

    
  }

  logOut() {
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('type')
  }
}

