import { Component } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent  {

   prodName:string = "";
   unitprice:number = 0;
   qty:number = 0;
   price:number = 0;
   result:string = "";
  getTotal_click()
  {
    this.result = "Total amount: ";
    this.price = this.unitprice * this.qty;
  }
}
