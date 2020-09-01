import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';


  
  todolist = [{name:"Matome",Sname:"kobe",age:"30",Tittle:"system admin",button:"",},
  {name:"hhhhnda",Sname:"ghhhh",age:"20",Tittle:"Web designer",button:""},
   {name:"ngghdajh",Sname:"gg",age:"40",Tittle:"system developer",button:""},
    {name:"hnda",Sname:"ggggg",age:"25",Tittle:"ICT officer",button:""},
     {name:"1mmanhda",Sname:"g",age:"24",Tittle:"IT technician",button:""},
     {name:"2mmavnda",Sname:"kkkk",age:"24",Tittle:"software developer",button:""},
     {name:"3mmandbna",Sname:"nnnnn",age:"24",Tittle:"Software tester",button:""},
     {name:"4mmhhhanda",Sname:"ppppp",age:"24",Tittle:"IT technician",button:""},
     {name:"5mmahnda",Sname:"uuuu",age:"24",Tittle:"IT security",button:""},
  {name:"kkkwanda",Sname:"gjjgjjkk",age:"33",Tittle:"system analyst",button:""}];
};
