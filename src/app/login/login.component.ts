import { Component, OnInit } from '@angular/core';
import { RegisterUser } from '../model/registerUser';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterUserService } from '../services/register-user.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''
  password = ''
  invalidLogin = false
  userType;

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    (this.loginservice.authenticate(this.email,this.password).subscribe(
      data => {
        console.log("response",data);
      this.userType =data;
      let registerUser = <RegisterUser>new Object();
      registerUser.type = this.userType.type;
       
       console.log("esss",registerUser);

           let user = sessionStorage.setItem('email',this.email)
           let userType =sessionStorage.setItem('type',this.userType.type)

        this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
      }
        )
        );
    
      
    }

}
