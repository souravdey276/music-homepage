import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User} from '../model/user';
@Injectable()
export class AuthenticationService {

  private status: boolean;
  private authUrl: string;
  currentUser:string;
  private isUserlogedIn=false;

  constructor(private httpClient : HttpClient) { 
    //this.authUrl='http://localhost:7777/api/v1/user/getUser';
    //  this.authUrl='http://localhost:4444/api/authentication';
  }

  setIsUserLogedin(islogedIn:boolean)
  {
    this.isUserlogedIn=islogedIn;
  }
  getIsUserLogedIn()
  {
    return this.isUserlogedIn;
  }



    setStatus ( status : boolean)
    {
      this.status=status;
    }

    getStatus() : boolean
    {
      return this.status;
    }

    setBearerToken(token)
    {
      localStorage.setItem('bearerToken',token);

    }
    getBearerToken()
    {
      return localStorage.getItem('bearerToken');
    }


     setCurrentUser(user)
    {
      this.currentUser=user;
    }
    getCurrentUser()
    {
      return this.currentUser;
    } 





    

  validateUser(email : string, password:string) : Observable<User>
  {
    return this.httpClient.get<User>(`http://localhost:4444/api/authentication/login/${email}/${password}`);
  }

  addUser(user : User) : Observable<any>
  {
    console.log('user',user)
    return this.httpClient.post("http://localhost:4444/api/authentication/add/User",user);
  }

  updateUser(user: User){  
    return this.httpClient.put("http://localhost:4444/api/authentication/updateUser" + '/' + user.email, user);  
  }

  logout(){
    localStorage.clear();
    return this.httpClient.get<any>(`http://localhost:4444/api/authentication/logout`);
  }
}
