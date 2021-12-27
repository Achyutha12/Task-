import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-http-client-demo',
  templateUrl: './http-client-demo.component.html',
  styleUrls: ['./http-client-demo.component.css']
})
export class HttpClientDemoComponent {

  //Inject HttpClient
  constructor(private httpObj:HttpClient) { }

  userArray:any[] = [];

  getData_Click()
  {
    let url = "https://reqres.in/api/users";

    let source:Observable<any> = this.httpObj.get(url);

    source.subscribe((result:any) => {
      this.userArray =result.data;
      //console.log(result.data);
    });
  }
}
