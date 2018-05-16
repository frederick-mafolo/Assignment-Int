import { Component, OnInit  } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  private selectedEmployee:any;
  constructor(emp:EmployeeService) {
   this.selectedEmployee =  JSON.parse(localStorage.getItem('empData'));
   console.log(this.selectedEmployee)
   }

  ngOnInit() {
  }

}
