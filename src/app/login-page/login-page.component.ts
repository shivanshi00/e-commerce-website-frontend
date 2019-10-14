import {Component, OnInit} from "@angular/core";
import { AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";
import {AppService} from "../app.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username;
  password;
  constructor(private service:AppService, private router:Router, private authService:AuthenticationService) { }

  ngOnInit() {

    if(this.service.checkLogin())
    {
      this.router.navigate(['home']);
    }
  }
  login()
  {
    console.log("login entered");
    this.authService.authenticate(this.username, this.password).subscribe(
    data=>{
      this.service.isLoggedIn(true);
      this.router.navigate(['home']);
    });
  }
  logout()
  {
    this.service.isLoggedIn(false);
  }

}


