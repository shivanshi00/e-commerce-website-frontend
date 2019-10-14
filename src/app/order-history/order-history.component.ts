import { Component, OnInit } from '@angular/core';
import {ServicesService} from "../services.service";

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
result;
  constructor(private service:ServicesService) { }

  ngOnInit() {
    return this.service.gethistoryorder().subscribe(data=>{
      this.result=data;
      console.log(this.result);
    })
  }

}
