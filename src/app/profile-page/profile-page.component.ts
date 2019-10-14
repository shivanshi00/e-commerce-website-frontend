import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServicesService} from "../services.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
result;
  constructor(private router:Router, private service:ServicesService, private http:HttpClient) { }

  ngOnInit() {
    this.service.getInfo().subscribe(res=>{
      this.result=res;
      console.log(this.result);
    });
  }

}
