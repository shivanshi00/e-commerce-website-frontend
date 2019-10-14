import { Component, OnInit } from '@angular/core';
import { products } from './product.constant';
import {ServicesService} from '../services.service';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
result:any;
  result1:any;


  constructor(private abc: ServicesService ,private act: ActivatedRoute, private router:Router)
  {
  }

 data:any;
  ngOnInit() {
  this.abc.products().subscribe(res=>{
     this.result=res;});
  }
}

  /*addtocart(){
    alert("added to cart");
  }*/

  /*details(id){
  console.log(id);
  this.router.navigate(['/proddet', id]);
  }*/

