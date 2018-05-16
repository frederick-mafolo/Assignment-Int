import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  private currentUser:object;
  constructor(private router:Router, private authService:AuthenticationService,private employeeService:EmployeeService) { 
    this.getUser()
  }

  getUser(){
    this.employeeService.getMe().subscribe((response)=>{
     this.currentUser = response;
     console.log(response)
    })}
  
    logout(){
      this.authService.logout();
      this.router.navigate(['/login']);
    }

  ngOnInit() {
  }

}
