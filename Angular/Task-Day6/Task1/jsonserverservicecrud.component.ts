import { Component, OnInit } from '@angular/core';
import { empJSON } from '../models/empJSON';
import { DBService } from '../services/db.service';

@Component({
  selector: 'app-jsonserverservicecrud',
  templateUrl: './jsonserverservicecrud.component.html',
  styleUrls: ['./jsonserverservicecrud.component.css']
})
export class JsonserverservicecrudComponent implements OnInit {

  empno: number = 0;
    ename  :string  = "";
    eloc  :string  = "";
    salary:number = 0;
    job:string = "";
    isEmpnoDisabled = false;


    empsArray:empJSON[]  = [];
    empsArray1:empJSON[]  = [];
    empsArray2:empJSON[]  = [];

    tempArray:string[] = [];

    strJob:string = "";

    url:string  = "http://localhost:3000/emp";


    constructor(private dbservice: DBService) {

     }


     ngOnInit()  {
          
     }


    getEmp_click()
    {
      this.dbservice.getAllEmployee().subscribe( (response:any) =>{
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

        this.dbservice.createEmp(Obj).subscribe( (response:any) =>{
          console.log("New Emp details are added to server.");
          alert("New Emp details are added to server.");
          this.clearFields();
          this.getEmp_click();
        });
    }

    deleteEmp_click(eno:number)
    {
      let isDelete:boolean = confirm("Are you sure you want to delete this employee record?");

      if(isDelete == true)
      {
        this.dbservice.deleteEmp(eno).subscribe( (response:any) =>{
          console.log("Requested Emp details are deleted from  server.");
          alert("Requested Emp details are deleted from  server.");
          this.getEmp_click();  // to get all the updated results
        });
      }
      
    }

    selectEmp_click(eno:number)
    {
      this.dbservice.getEmpId(eno).subscribe( (response:any) =>{

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
        



        this.dbservice.updateEmp(Obj).subscribe( (response:any) =>{
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

   
    getEmpByJob_click()
     {
      this.dbservice.getEmployeeByJob(this.strJob).subscribe( (response:empJSON[]) =>
      {
        console.log(response);
        this.empsArray1 = response;
        
      });
     }


     getEmpJob_click()
     {
         
      this.dbservice.getEmployeeJobs().subscribe( (response:string[]) =>
      {
        console.log(response);
        this.tempArray = response;
      });
     }

     getEmpNameAndJob_click()
     {
      this.dbservice.getEmpNameAndJob().subscribe( (response:any[]) =>
      {
        console.log(response);
        this.empsArray2 = response;
      });
     }

     wrongRequest_click()
     {
       this.dbservice.doWorngRequest().subscribe((response:any[]) => 
       {
        console.log(response);
       });
     }
}
