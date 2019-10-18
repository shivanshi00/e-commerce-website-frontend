import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
username;
password;
name;
  constructor(private service:AppService, private router:Router) { }

  ngOnInit() {
  }
  addUser()
  {
    const user={
      username: this.username,
      password:this.password,
      name:this.name,
    };
    this.service.addUser(user);
  }
}
