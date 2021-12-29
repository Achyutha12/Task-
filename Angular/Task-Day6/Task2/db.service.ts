import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { empJSON } from '../models/empJSON';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  dataArray:any[] = [];
  url:string = "http://localhost:3000/emp";

  constructor(private httpObj:HttpClient) { }

  //JWT Token example
  getTokenForValidUser(uid:string, pwd:string) : Observable<any>
  {
    let userObj:any = {"email":uid, "password":pwd};
    let authUrl:string = "http://localhost:3000/login";
    return this.httpObj.post(authUrl, userObj);
  }
  getAllEmployee():Observable<any>
  {
    return this.httpObj.get(this.url);
  }

  getEmpId(id:number):Observable<any>
  {
    return this.httpObj.get(this.url + "/" + id);
  }

  createEmp(empObj:any):Observable<any>
  {
    return this.httpObj.post(this.url, empObj);
  }

  updateEmp(empObj:any):Observable<any>
  {
    let strUrl = this.url + "/" + empObj.empno;
    return this.httpObj.put(strUrl,empObj);
  }

  deleteEmp(id:number):Observable<any>
  {
    return this.httpObj.delete(this.url + "/" + id);
  }

  //  Customizing the response using RxJS operators

  getEmployeeJobs():Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.url).pipe(
      map(res => {
        return res.map(item => { return item.job });
    })
    );
  }

  getEmployeeByJob(job:string):Observable<empJSON[]>
  {
    return this.httpObj.get<any[]>(this.url).pipe(
      map(res => {
        return  res.filter(item => item.job == job);
    })
  );
  }

  getEmpNameAndJob():Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.url).pipe(
      map(res => {
        return res.map(item => {
          return { 	empname: item.empname, job : item.job} });
    })
    );
  }

  doWorngRequest():Observable<any>
  {
    let wrongUrl = "http://localhost:300/depts123";
    return this.httpObj.get(wrongUrl);
  }

}
