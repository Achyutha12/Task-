import { Component, OnInit } from '@angular/core';
import { product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

  public produArray:product[] = [

    {pid : 10, pname : "i Phone", price : 60000, category : "Mobile", qty : 4},
    {pid : 11, pname : "i Pad", price : 45000, category : "Tab", qty : 3},
    {pid : 12, pname : "Samsung", price : 40000, category : "Mobile", qty : 6},
    {pid : 13, pname : "RedMi", price : 20000, category : "Mobile", qty : 4},
    {pid : 14, pname : "Lenovo", price : 60000, category : "Laptop", qty : 4},

  ];
  
}
