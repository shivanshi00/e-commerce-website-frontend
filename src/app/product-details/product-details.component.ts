import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServicesService} from "../services.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
Id:number;
product;
  constructor(private ar:ActivatedRoute, private router:Router, private service:ServicesService ) { }

  ngOnInit() {
    this.ar.queryParams.subscribe((data)=>{
      this.Id=data.id;
       this.service.productdata(this.Id).subscribe((data)=>{
        this.product=data;
        console.log(this.product);

      })
    })
  }

}
