import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

selectEmp:string = "";
   updateEmp_Parent(strEmp:string)
   {
     this.selectEmp = strEmp;
   }

   selectEmpNo:string = "";
   updateEmpNo_Parent(strEmpNo:string)
   {
     this.selectEmpNo = strEmpNo;
   }
}
