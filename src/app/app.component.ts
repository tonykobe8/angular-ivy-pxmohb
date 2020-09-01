import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';


  todolist = [{name:"noknokwanda",Sname:"hhhhh",age:"30",Tittle:"Developer",button:"<input type='button'>save"},
  {name:"kwanda",Sname:"gggggggg",age:"40",Tittle:"Web designer",button:'<button mat-raised-button (click)="openBottomSheet()">Open file</button>'}];
}
