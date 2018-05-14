import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private employeeService:EmployeeService) {
    this.getUser()
   }

  ngOnInit() {
    
  }
  getUser(){
    this.employeeService.getCurrentEmployee().subscribe((response)=>{
      console.log(response);
    })
  }

}
