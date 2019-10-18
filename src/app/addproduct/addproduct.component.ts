import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServicesService} from "../services.service";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  productName;prductPrice;description
  category;


  constructor(private httpService: ServicesService) { }

  ngOnInit() {

  }
  /*setCategory(category)
  {
  this.category=category;
  }*/
  addProduct()
  {
    let json={
      "productName":this.productName,
      "prductPrice":this.prductPrice,
      "category":this.category,
      "description":this.description,
      "image":""
    };
    this.httpService.addProduct(json).subscribe(
      response =>{console.log(response);
      alert("Product successfully added");}
    );
  }
}
