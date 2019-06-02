import { Component, OnInit } from '@angular/core';
import { RegisterUser } from '../model/registerUser';
import { RegisterUserService } from '../services/register-user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 users ={};

  constructor( 
    private router: Router,
    private route: ActivatedRoute,
    private registeruserservice: RegisterUserService) { }

  ngOnInit() {


  }
  save(users) {
   console.log("users", users);
   let user = <RegisterUser>new Object();
user.userId =users.userId;
user.firstName =users.firstName;
user.secondName =users.secondName;
user.email =users.email;
user.password =users.password;


      this.registeruserservice.addNewUser( user).subscribe(data =>{
        console.log("add new dta",data);
      })
      

     
    
  }

}
