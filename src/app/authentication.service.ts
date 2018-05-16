import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';


@Injectable()
export class AuthenticationService {
  public  API_AUTH:string = "http://staging.tangent.tngnt.co/api-token-auth/"
  public token: string;
 
  constructor(private http:Http) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
   }


  public async login(username:string,password:string){
    console.log(username,  password);
    var headers = new Headers();
     // let encoded_data = JSON.stringify({ newTask }); to array
     headers.append('Content-Type', 'application/json');
     return this.http.post(this.API_AUTH,{username,password},{headers:headers})
     .subscribe(res =>{
      console.log(res);

       if (res) {
         // store user details and jwt token in local storage to keep user logged in between page refreshes
         localStorage.setItem('currentUser', JSON.stringify(res));
       }
     } );
   }
  


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('empData');
  }
}
