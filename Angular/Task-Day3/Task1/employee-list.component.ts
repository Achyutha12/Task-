import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { employee } from '../models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnChanges
{

    number:number = 0;
    name:string = "";
    job:string = "";
    salary:number = 0;
    deptno:number = 0;
    
   @Input() empNoSelect:string="";
   @Input() empList:string="";  


    tempArray:employee[] = [];
    
    
    empArray:employee[] = [
      {empno:4567, empname:"Scott", empjob:"Manager", empsalary:75000, empdeptno:20},
      {empno:4589, empname:"Ravi", empjob:"Manager", empsalary:70000, empdeptno:30},
      {empno:6890, empname:"Ram", empjob:"Developer", empsalary:50000, empdeptno:10},
      {empno:3213, empname:"Anil", empjob:"Developer", empsalary:40000, empdeptno:20},
      {empno:9045, empname:"Anish", empjob:"Analyst", empsalary:32000, empdeptno:30},
      {empno:3476, empname:"Varun", empjob:"Analyst", empsalary:23000, empdeptno:10},
    ];

    
    ngOnChanges() 
    {
      
      if(this.empNoSelect == "EmpNo")
      {
        this.tempArray = this.empArray.sort((a,b) => ((a.empno > b.empno) ? 1:-1));
      }
      else if(this.empNoSelect == "EmpName")
      {
        this.tempArray = this.empArray.sort((a,b) => ((a.empname > b.empname) ? 1 : -1));
      }
      else if(this.empNoSelect == "EmpJob")
      {
        this.tempArray = this.empArray.sort((a,b) => ((a.empjob > b.empjob) ? 1 : -1));
      }
      else if(this.empNoSelect == "EmpSalary")
      {
        this.tempArray = this.empArray.sort((a,b) => ((a.empsalary > b.empsalary) ? 1 : -1));
      }
      else if(this.empNoSelect == "EmpDeptNo")
      {
        this.tempArray = this.empArray.sort((a,b) => ((a.empdeptno > b.empdeptno) ? 1 : -1));
      }
      else
      {
        this.tempArray = this.empArray;
      }
       
    }
}
