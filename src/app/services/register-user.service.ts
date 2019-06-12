import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from '../model/registerUser';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http: HttpClient) { }
  // url = "/api/user/";
  url = "/api/user/";
  // url = "http://localhost:8080/user/"
  
  addNewUser(users) {
    console.log( "from service",users);
    return this.http.post(this.url,users);
  }
  loginAuth(users){
    console.log( "from service",users);
    return this.http.post(this.url,users);

  }
  checkbyUserEmail(email){
    console.log("service is woring", this.http.get<RegisterUser[]>(this.url ,email))
    return this.http.get<RegisterUser>(this.url ,email)
   }
  getallUsers(){
    console.log("get allcart ", this.http.get<RegisterUser[]>(this.url));
    return this.http.get<RegisterUser[]>(this.url);
  }
}
