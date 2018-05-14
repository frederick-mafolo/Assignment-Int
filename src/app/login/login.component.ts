import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
    private username:string;
    private password:string;

  // public username:string;
  // public password:string;
  constructor(private authService:AuthenticationService,private router: Router) { }

  ngOnInit() {
  }
 
  login(){
    this.authService.login(this.username,this.password).then(()=>{
      this.router.navigate(['/dashboard']);
    })
  }
}
