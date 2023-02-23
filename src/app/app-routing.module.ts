import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { DisplayComponent } from './display/display.component';
import { RecommendComponent } from './recommend/recommend.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RoutingService } from './services/routing.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {HeaderComponent } from './header/header.component'


const routes: Routes = [
  {path : '', component : BodyComponent},
  {path : 'addMusic', component :RecommendComponent }, 
  
 {path : 'login', component :LoginComponent },
 

 {
  path:"register", component:RegisterComponent
},
 {
  canActivate:[RoutingService], path : "getMusic", component : DisplayComponent
},
{
  path:"login" , component:LoginComponent
}, 
{
  canActivate:[RoutingService], path : "takeMusic", component : FavouriteComponent
},
{
  path:"login" , component:LoginComponent
},
{
  canActivate:[RoutingService], path : "editprofile", component : EditProfileComponent
},
{
  path:"login" , component:LoginComponent
},
{
  canActivate:[RoutingService], path : "logout", component : HeaderComponent
},
{
  path:"login" , component:LoginComponent
},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
