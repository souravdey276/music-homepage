import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Song } from '../model/song';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User=new User();
  
   music : Song=new Song();


  constructor( private router : Router,private authenticationService : AuthenticationService, private toastr : ToastrService ) { }
  bearerToken : any;
  ngOnInit(): void {
    
    

      }
      register(){
        this.router.navigate(['register']);
      }
      





       onLogin():void
  {
    {
      this.authenticationService.validateUser(this.user.email,this.user.password).subscribe(response=>{
      if(response)
      {
        console.log(response);
        console.log(response[`token`]);
        this.bearerToken=response[`token`];
        this.authenticationService.setBearerToken(this.bearerToken);
        this.authenticationService.setStatus(true);
        this.music.setEmail(this.user.email);
        this.toastr.success("login Successfull")
        this.authenticationService.setCurrentUser(this.user.email)
        this.authenticationService.setIsUserLogedin(true);
        this.router.navigate(['addMusic']);
        
        
      }
      }, error=>{
         this.toastr.error("Invalid Email Id or Password");
      });
     }
   
  }

  }




