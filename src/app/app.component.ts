import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';


  todolist = [{name:"noknokwanda",Sname:"hhhhh",age:"30",Tittle:"Web designer",button:""},
  {name:"kwanda",Sname:"gggggggg",age:"40",Tittle:"Web designer",button:""}];
};
