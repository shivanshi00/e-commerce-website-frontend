import { Component, OnInit } from '@angular/core';
import {ServicesService} from "../services.service";
import {Router} from "@angular/router";
import {AppService} from "../app.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private app:AppService, private router:Router) { }

  ngOnInit() {
  }

  logout() {
    this.app.isLoggedIn(false);
    this.router.navigate(['/login']);
  }
}
