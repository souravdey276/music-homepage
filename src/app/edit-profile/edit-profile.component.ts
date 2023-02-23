import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  
  user : User=new User;
gender=["Male","Female","Others"];
constructor(private authenticationService:AuthenticationService,private toastr : ToastrService) { }

  ngOnInit(): void {
  }
  updateUser():void{
    console.log(this.user)
    this.authenticationService.updateUser(this.user).subscribe(res=>{
      this.toastr.success('Updated');
      if(res){
       
        console.log("user updated");
     }
    },err=>{
      this.toastr.error('Email cannot be changed');
      console.log("user does not updated");
    }) }
}
