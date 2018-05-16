import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private employees:any;
  public selectedUser:any;

  constructor(private employeeService:EmployeeService,private router: Router) {
    this.getUser();
    this.getAllUsers();
   }

  ngOnInit() {
    
  }
  getUser(){
    this.employeeService.getCurrentEmployee().subscribe((response)=>{
      console.log(response);
    })
  }

  getAllUsers(){
    this.employeeService.getAllEmployees().subscribe((response)=>{
      this.employees=response;
    })
  }

  viewEmployee(employee){
    localStorage.setItem('empData', JSON.stringify(employee))
    this.router.navigate(['/employee'])
    // .then(()=>{
    //   localStorage.setItem('empData', JSON.stringify(employee));
    // }).catch((error)=>{console.log(error)})
   
  }

  // async viewEmployee(employee){

  // }

}
