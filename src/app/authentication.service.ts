import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }
  authenticate(username:string, password:string) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    {
      return this.httpClient.get("http://localhost:8800/api/product", {headers}).pipe(
        map(data => {
          sessionStorage.setItem('token', btoa(username + ':' + password));
          return data;
        })
      );
    }
  }
  logout()
  {
    sessionStorage.removeItem('token');
  }
}
