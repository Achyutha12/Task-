import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent  {

  public empId:number = 54654564;
  public empName:string = "Stephen";
  public empJob:string = "Manger";
  public empSalary:number = 75000;
  public empDepo:number = 10;
}

  
