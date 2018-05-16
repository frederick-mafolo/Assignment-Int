import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { User } from './models/User';



@Injectable()
export class EmployeeService {
  public API_EMPLOYEE: string = "http://staging.tangent.tngnt.co/api";
  public token: string;

  constructor(private http: Http, public authService: AuthenticationService) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser._body.substr(10).slice(0, -2);

  }


  // get all employees
  getAllEmployees() {

    let headers = new Headers({ 'Authorization': 'Token ' + this.token });

    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.API_EMPLOYEE + "/employee", options)
      .map(res => res.json());
  }

  // getCurrentEmployee(){
  //   return this.http.get(this.API_EMPLOYEE+"/user/me")
  //   .map(res => res.json());
  // }

  getCurrentEmployee(): Observable<User[]> {
    // add authorization header with jwt token
    let headers = new Headers({ 'Authorization': 'Token ' + this.token });

    let options = new RequestOptions({ headers: headers });

    // get users from api
    return this.http.get(this.API_EMPLOYEE + "/user/me", options)
      .map((response: Response) => response.json());
  }


  // get my profile
  getMe() {
      let headers = new Headers({ 'Authorization': 'Token ' + this.token });
      let options = new RequestOptions({ headers: headers });
      // get users from api
      return this.http.get(this.API_EMPLOYEE + "/employee/me", options)
        .map((response: Response) => response.json());
  }








}
