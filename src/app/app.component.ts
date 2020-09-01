import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';


  todolist = [{name:"noknokwanda",Sname:"hhhhh",age:"30",Tittle:"system admin",button:""},
  {name:"kwanda",Sname:"ghhhh",age:"20",Tittle:"Web designer",button:""},
   {name:"nda",Sname:"gg",age:"40",Tittle:"system developer",button:""},
    {name:"hnda",Sname:"ggggg",age:"25",Tittle:"ICT officer",button:""},
     {name:"1mmanda",Sname:"g",age:"24",Tittle:"IT technician",button:""},
     {name:"2mmanda",Sname:"kkkk",age:"24",Tittle:"software developer",button:""},
     {name:"3mmanda",Sname:"nnnnn",age:"24",Tittle:"Software tester",button:""},
     {name:"4mmanda",Sname:"ppppp",age:"24",Tittle:"IT technician",button:""},
     {name:"5mmanda",Sname:"uuuu",age:"24",Tittle:"IT security",button:""},
  {name:"kkkwanda",Sname:"gjjgjjkk",age:"33",Tittle:"system analyst",button:""}];
};
