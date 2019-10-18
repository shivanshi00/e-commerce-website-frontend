import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private _http:HttpClient) { }
  result2 :any;
  filterresult:any;
  productdata(id)
  {
   console.log(id);
   const token=sessionStorage.getItem('token');
   const headers=new HttpHeaders({Authorization:'Basic '+token});
   return this._http.get("http://localhost:8800/api/product/"+id,{headers});
  }
  products()
  {
    const token=sessionStorage.getItem('token');
    const headers=new HttpHeaders({Authorization:'Basic '+token});
   return this._http.get("http://localhost:8800/api/product", {headers});
  }

  filter(category)
  {
  console.log(category);
    const token=sessionStorage.getItem('token');
    const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this._http.get("http://localhost:8800/api/product/category/"+category, {headers});

  }

  getByPriceFilter(number1: number, number2: number) {
    console.log("price filter in services");
    const token=sessionStorage.getItem('token');
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this._http.get("http://localhost:8800/api/getByPrice/"+number1+"/"+number2, {headers});
  }

  checkout()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this._http.get("http://localhost:8800/cart/checkout/recieve",{headers});
  }

  showcart()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this._http.get("http://localhost:8800/cart/showcart/recieve",{headers});
  }
  addProductToCart(productid:Number)
  {
    console.log(productid);
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this._http.get("http://localhost:8800/cart/addtocart/recieve/"+productid, {headers});
  }
  deleteproduct(productid:Number)
  {
    console.log(productid);
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this._http.get("http://localhost:8800/cart/deleteproduct/recieve/"+productid, {headers});
  }
  removeproductFromCart(productid:Number)
  {
    console.log(productid);
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this._http.get("http://localhost:8800/cart/removeproduct/recieve/"+productid, {headers});
  }


  getInfo()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this._http.get("http://localhost:8800/profile/get",{headers});
  }
  gethistoryorder()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this._http.get("http://localhost:8800/cart/orderhistory/recieve",{headers});
  }


  addProduct(json) {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this._http.post("http://localhost:8800/api/create",json,{headers});
  }
}
