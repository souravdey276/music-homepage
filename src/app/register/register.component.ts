import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User=new User();
status : String="";
userAdded : User=new User();
gender=["Male","Female","Others"];
constructor(private authenticationService : AuthenticationService, private router : Router, private toastr : ToastrService) { }

ngOnInit(): void {
}

addUser() : void
{
this.authenticationService.addUser(this.user).subscribe(response=>{
  if(response)
  {
     this.userAdded=this.user;
     this.toastr.success('Registered');
     this.status="Record added!!!!"     
   console.log("added");
    console.log(response);
  }
  else
  {
    console.log("Error in adding");
  }
 },error=>{
   console.log("Unable to reach the site");
   this.toastr.error("This account already has been registerd")
 });
}
}