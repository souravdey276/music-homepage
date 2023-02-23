import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DisplayComponent } from './display/display.component';

import { RecommendComponent } from './recommend/recommend.component';
import { RecommendService } from './services/recommend.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule }  from '@angular/material/card';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FavouriteComponent } from './favourite/favourite.component';
import { ToastrModule} from 'ngx-toastr';

import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    
    DisplayComponent,
    
    RecommendComponent,
    
    
    
    FavouriteComponent,
    
    
    
    RegisterComponent,
    
    LoginComponent,
    
    DashboardComponent,
    
    EditProfileComponent,
    
    
    
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      progressBar: true,
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    }),
    
    
  ],
  providers: [RecommendService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
