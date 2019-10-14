import { Component, OnInit } from '@angular/core';
import {filter} from "rxjs/operators";
import {ServicesService} from "../services.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  constructor(private abc:ServicesService,private router:Router) {
    this.abc.products().subscribe(res=>{this.result=res;});
  }
result:any;result1:any;
  ngOnInit() {
  }
  filter(category)
  {
    if(category=='All')
    {
      this.abc.products().subscribe(res=>{this.result=res;});
    }
    else
    {

    }
    console.log(category);

    this.abc.filter(category).subscribe(res =>{
      this.result=res;
    });
  }

  priceFilter($event, number1:number, number2:number)
  {
    console.log("price filter in ts");
    this.abc.getByPriceFilter(number1, number2).subscribe((data)=>{this.result=data;})
  }

  viewDetails(id)
  {
    this.router.navigate(['proddet'], {queryParams:{id} });
  }

  addToCart(id)
  {
    this.abc.addProductToCart(id).subscribe((data)=>{
      this.result1=data;
    alert("product added");
    });
  }

}
