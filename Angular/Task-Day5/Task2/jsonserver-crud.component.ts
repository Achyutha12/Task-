import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { empJSON } from '../models/empJSON';


@Component({
  selector: 'app-jsonserver-crud',
  templateUrl: './jsonserver-crud.component.html',
  styleUrls: ['./jsonserver-crud.component.css']
})
export class JSONServerCRUDComponent implements OnInit {

    empno: number = 0;
    ename  :string  = "";
    eloc  :string  = "";
    salary:number = 0;
    job:string = "";
    isEmpnoDisabled = false;
    empsArray:empJSON[]  = [];
    url:string  = "http://localhost:3000/emp";


    constructor(private httpObj: HttpClient) {

     }


     ngOnInit()  {
          
     }


    getEmp_click()
    {
      this.httpObj.get(this.url).subscribe( (response:any) =>{
         console.log(response);
        this.empsArray = response;
      });

    }


    addEmp_click()
    {
        let Obj:empJSON = new empJSON();
        Obj.empno = this.empno;
        Obj.empname = this.ename;
        Obj.emploc = this.eloc;
        Obj.salary = this.salary;
        Obj.job = this.job;
        this.clearFields();

        this.httpObj.post(this.url, Obj).subscribe( (response:any) =>{
          console.log("New Emp details are added to server.");
          alert("New Emp details are added to server.");
          this.clearFields();
          this.getEmp_click();
        });
    }

    deleteEmp_click(eno:number)
    {
      
      this.httpObj.delete(this.url + "/" + eno).subscribe( (response:any) =>{
        console.log("Requested Emp details are deleted from  server.");
        alert("Requested Emp details are deleted from  server.");
        this.getEmp_click();  // to get all the updated results
      });
    }

    selectEmp_click(eno:number)
    {
      this.httpObj.get(this.url + "/" + eno).subscribe( (response:any) =>{

        let Obj:any = response;
        this.empno = Obj.empno;
        this.ename = Obj.empname;
        this.eloc =  Obj.emploc;
        this.job = Obj.job;
        this.salary = Obj.salary;
        this.isEmpnoDisabled = true;

      });


    }

    updateEmp_click()
    {
      let Obj:empJSON = new empJSON();
        Obj.empno = this.empno;
        Obj.empname = this.ename;
        Obj.emploc = this.eloc;
        Obj.salary = this.salary;
        Obj.job = this.job;
        



        this.httpObj.put(this.url + "/" + this.empno, Obj).subscribe( (response:any) =>{
        console.log("Requested Emp details are updated to server.");
        alert("Requested Emp details are updated to server.");
        this.clearFields();
        this.getEmp_click();
      });
    }


    clearFields()
    {
        this.isEmpnoDisabled = false;
        this.empno = 0;
        this.ename  = "";
        this.eloc  = "";
        this.job = "";
        this.salary = 0;
    }
}
