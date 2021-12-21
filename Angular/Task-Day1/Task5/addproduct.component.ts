import { Component, OnInit } from '@angular/core';
import { product } from '../models/product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent  {
 
    public pid:number = 0;
    public pname:string = ""; 
    public price:number = 0;
    public category:string = "";
    public qty:number = 0;

    productlist:product[] = [];

    getproduct()
    {
      let obj:product = new product(this.pid,this.pname,this.price,this.category,this.qty);
      this.productlist.push(obj);
    }
}
