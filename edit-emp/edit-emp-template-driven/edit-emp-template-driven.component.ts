import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-emp-template-driven',
  templateUrl: './edit-emp-template-driven.component.html',
  styleUrls: ['./edit-emp-template-driven.component.css']
})
export class EditEmpTemplateDrivenComponent implements OnInit {
  emp:Employee={  
    id:3,   
    name:"john",   
    salary:10000, 
    permanent:"true",
    departments:[{dept_id:1,dept_name:"payroll"},
                {dept_id:2,dept_name:"Internal"},
                {dept_id:3,dept_name:"HR"}
              ],
    skill:[    
    {skill_id:100,skill_name:"HTML"},
    {skill_id:101,skill_name:"CSS"},
    {skill_id:102,skill_name:"JavaScript"}],
    dob:new Date('12/31/2000'),
  };  
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  submitted = false;
 
  onSubmit() {
    console.log("clicked"); 
    this.submitted = true;
    if(this.submitted==true){
    this.route.navigate(['/']);
    }
  }
}
