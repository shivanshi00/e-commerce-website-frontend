import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpclient:HttpClient, private router:Router) { }
  isLoggedIn(bool:boolean)
  {
    sessionStorage.setItem('auth', String(bool));
    return bool;
  }
  checkLogin()
  {
    const auth=sessionStorage.getItem('auth');
    return JSON.parse(auth);
  }

  authenticate(username, password)
  {
    // const headers=new HttpHeaders({Authorization})
  }

  addUser(user)
  {
    return this.httpclient.post("http://localhost:8800/api/addUsers", user).subscribe(res=>
    this.router.navigate(['home']));
  }
}
