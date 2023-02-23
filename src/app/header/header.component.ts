import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router,private authenticationService : AuthenticationService, private toastr : ToastrService) { }

  ngOnInit(): void {
  }
  back(){
    this.router.navigateByUrl('');
  }
  favourite()
  {
    this.router.navigateByUrl('/favourite');
  }


  logout(){

    console.log('logout');
    this.authenticationService.logout();
    this.authenticationService.logout().subscribe( response=> {
      console.log(response);
      console.log('logout success');
      this.toastr.success('Logout Success');
    }, err =>{
      console.log(err);
    })
  }
}
