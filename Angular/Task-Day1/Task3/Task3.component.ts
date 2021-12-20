import { Component, OnInit } from '@angular/core';
//import { url } from 'inspector';
import { Task3 } from '../models/Task3';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component  {

  public Array:Task3[] = [

    {tImage : "/assets/images/angular-clipart-10.jpg", tname : "Angular", tdescription : "Front end development work"},
    {tImage : "/assets/images/firefox-logo-huge.jpg", tname : "Fire Fox", tdescription : "Standard Browser"},
    {tImage : "/assets/images/Chrome.jfif", tname : "Chrome", tdescription : "Google chrome web browser"},
    {tImage : "/assets/images/Html.jfif", tname : "HTML 5", tdescription : "Next generation upgrade for HTML Language"},
    {tImage : "/assets/images/css.jfif", tname : "CSS", tdescription : "Style sheet language for animation"},
    {tImage : "/assets/images/Android.png", tname : "Android", tdescription : "Popular mobile operating syatem"},
    
  ];
  

}
