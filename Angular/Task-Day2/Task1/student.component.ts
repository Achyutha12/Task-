import { Component, OnInit } from '@angular/core';
import { student } from '../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  sid:number = 0;
  sname:string = "";
  //dob:number = 0;
  course:string = "";
  contact:number = 0; 
  isStudentidDisable = false;
  message:string = "";


  stuarray:student[] = [];

  getStudent()
  {
    this.stuarray = [
    {sid:10, sname:"Harry", course:"B.E", contact:9898234545},
    {sid:11, sname:"Potter",  course:"B.Com", contact:7676060669},
    {sid:12, sname:"Ron", course:"B.A", contact:7575890012},
    {sid:13, sname:"Hermonie", course:"B.E", contact:8989453456},
    {sid:14, sname:"Luna", course:"LLB", contact:8787903434}
    ];
  }

addStudent()
{
  let stuObj:student = new student();

  stuObj.sid = this.sid;
  stuObj.sname = this.sname;
  //stuObj.dob = this.dob;
  stuObj.course = this.course;
  stuObj.contact = this.contact;
  let id:any = this.stuarray.find(x => x.sid == this.sid);
 
  if (this.stuarray.includes(id) === false) 
  {
    this.clearFields();
    this.stuarray.push(stuObj);
  }
  else{
    this.message = "**Student record with this Id is already inserted**";
  }
  
  
}

deleteStudent(id:number)
{
  let index:number = this.stuarray.findIndex(x => x.sid == id);
  this.stuarray.splice(index,1);
}
selectStudent(id:number)
{
  let stuObj:any = this.stuarray.find(x => x.sid == id);
  this.sid = stuObj.sid;
  this.sname = stuObj.sname;
  //this.dob = stuObj.dob;
  this.course = stuObj.course;
  this.contact = stuObj.contact;
  this.isStudentidDisable = true;
}

updateStudent()
{
  let index:number = this.stuarray.findIndex(x => x.sid == this.sid);
  this.stuarray[index].sname = this.sname;
  //this.stuarray[index].dob = this.dob;
  this.stuarray[index].course = this.course;
  this.stuarray[index].contact = this.contact;
  this.clearFields();
}

clearFields()
{
  this.isStudentidDisable = false;
  this.sid = 0;
  this.sname = "";
  //this.dob = 0;
  this.course = "";
  this.contact = 0;
  this.message = "";
}

}
