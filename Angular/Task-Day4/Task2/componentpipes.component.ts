import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentpipes',
  templateUrl: './componentpipes.component.html',
  styleUrls: ['./componentpipes.component.css']
})
export class ComponentpipesComponent 
{
  public empDetails:any[] = [
    {"empno":1, "empName":"Scott", "preformance":1},
    {"empno":2, "empName":"Abrons", "preformance":2},
    {"empno":3, "empName":"Smith", "preformance":3},
    {"empno":4, "empName":"James", "preformance":4},
    {"empno":5, "empName":"Adam", "preformance":1},
    {"empno":6, "empName":"Sathya", "preformance":3},
    {"empno":7, "empName":"Maneesh", "preformance":4},
    {"empno":8, "empName":"Haneesh", "preformance":2},
  ];
}
