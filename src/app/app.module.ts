import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationService } from './authentication.service';
import { AppRoutingModule } from './/app-routing.module';
import { EmployeeService } from './employee.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserDetailsComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,HttpModule, AppRoutingModule,ReactiveFormsModule, FormsModule
  ],
  providers: [AuthenticationService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
