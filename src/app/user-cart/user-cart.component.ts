import { Component, OnInit } from '@angular/core';
import {ServicesService} from "../services.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {
  result; total=0;i;data;
  constructor(private service:ServicesService, private router:Router) {




  }

  ngOnInit() {
    this.service.showcart().subscribe(res=>{this.result=res;
      console.log(this.result);
      this.finalTotal();
    });



  }

  finalTotal()
  {
    this.total=0;
    for(this.i=0;this.i<this.result.length; this.i++ )
    {
      this.total+=this.result[this.i].products.prductPrice*this.result[this.i].quantity;
    }
    console.log(this.total);
  }
  removeFromCart(id)
  {
    this.service.deleteproduct(id).subscribe(res=>{this.result=res;
      console.log(this.result);
      this.ngOnInit();
    });
  }
  increase(id)
  {
     this.service.addProductToCart(id).subscribe(res=>{
       this.ngOnInit();
     })
  }
  decrease(id)
  {
    this.service.removeproductFromCart(id).subscribe(res=>{
      this.ngOnInit();
    })
  }
  checkout()
  {
    this.service.checkout().subscribe(res=>{
      this.router.navigate(['history']);
    })

  }


}
