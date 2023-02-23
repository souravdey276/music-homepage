import { Injectable } from '@angular/core';
import  { HttpClient, HttpHeaders} from '@angular/common/http';

import { Song } from '../model/song';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class RecommendService {

  music : Array<Song>;
  musics : Song=new Song();

  artist : String="http://api.napster.com/v2.2/tracks/top";
  apikey : String="?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4";

  musicSubject : BehaviorSubject<Array<Song>>;

  
    constructor(private httpClient : HttpClient, private authenticationService : AuthenticationService) {

      this.musicSubject=new BehaviorSubject([]);
     }
  
    readMusic() : Observable<Array<any>>
    {
      return this.httpClient.get<Array<any>>("http://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4");
    }
  
   /*  addMusic(music : Song) : Observable<any>
    {
      
     
     
     return this.httpClient.post<any>("http://localhost:8181/api/music/addMusic",music).pipe(tap(addedMusic=>{ 
    
 
   }))
 } */

 addMusic(musics : Song) : Observable<any>
 {
   const bearerToken = this.authenticationService.getBearerToken();
   musics.email=this.authenticationService.getCurrentUser();
   

   /* alert(this.authenticationService.getBearerToken()); */
  return this.httpClient.post<any>("http://localhost:8181/api/music/addMusic",musics,
  {
   headers: new HttpHeaders().set("Authorization",`Bearer ${bearerToken}`)
  }).pipe(tap(addedMusic=>{ 
 this.music=addedMusic;
 this.musicSubject.next(this.music)

}))
}


addFavourite(musics : Song) : Observable<any>
 {
   const bearerToken = this.authenticationService.getBearerToken();
   musics.email=this.authenticationService.getCurrentUser();
   

   
  return this.httpClient.post<any>("http://localhost:8182/api/music/addFavourite",musics,
  {
   headers: new HttpHeaders().set("Authorization",`Bearer ${bearerToken}`)
  }).pipe(tap(addedFav=>{ 
 this.music=addedFav;
 this.musicSubject.next(this.music)

}))
}





 
 
  getMusic(email) : Observable<any>{
     console.log("the email id to in the favorite is");

    console.log(email);
  
    const bearerToken = this.authenticationService.getBearerToken();
     

    /* alert(this.authenticationService.getBearerToken()); */
      return this.httpClient.get<any>("http://localhost:8181/api/music/getMusic",{
        headers: new HttpHeaders().set("Authorization",`Bearer ${bearerToken}`)
       });  
    } 






    getFavourite(email) : Observable<any>{
      console.log("the email id to in the favorite is");
  
      console.log(email);
      /* const currentUser=this.authenticationService.getCurrentUser(); */
      const bearerToken = this.authenticationService.getBearerToken();
      
  
      /* alert(this.authenticationService.getBearerToken()); */
        return this.httpClient.get<any>("http://localhost:8182/api/music/getFavourite", {
          headers: new HttpHeaders().set("Authorization",`Bearer ${bearerToken}`)
         }); 
      } 



    deleteMusic(music) : Observable<any> {
      console.log(music)

      const bearerToken = this.authenticationService.getBearerToken();

   /* alert(this.authenticationService.getBearerToken()); */
   return this.httpClient.delete<any>(`http://localhost:8181/api/music/delete/${music.id}`,
   {
   headers: new HttpHeaders().set("Authorization",`Bearer ${bearerToken}`)
  });
      /* return this.httpClient.delete<any>(`http://localhost:8181/api/music/delete/${music.id}`); */
     }





     deleteFavourite(music) : Observable<any> {
      console.log(music)

      const bearerToken = this.authenticationService.getBearerToken();

   /* alert(this.authenticationService.getBearerToken()); */
   return this.httpClient.delete<any>(`http://localhost:8182/api/music/deleteFavourite/${music.id}`,
   {
   headers: new HttpHeaders().set("Authorization",`Bearer ${bearerToken}`)
  });
      /* return this.httpClient.delete<any>(`http://localhost:8181/api/music/delete/${music.id}`); */
     }




     searchArtist(artistName:string):Observable<any>
  {
    return this.httpClient.get<any>("http://api.napster.com/v2.2/albums/new?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&artistName="+artistName);
  }


    /*  searchArtist(searchTerm:string): Observable<any>{
       return this.httpClient.get(artist+ 'searchTerm' +apikey);
     } */




     fetchFromServer()
     {
       const bearerToken = this.authenticationService.getBearerToken();
  
      alert(this.authenticationService.getBearerToken());
      alert(`Bearer ${this.authenticationService.getBearerToken()}`);

      const currentUser=this.authenticationService.getCurrentUser();
      
      return this.httpClient.get<Array<Song>>(`http://localhost:8181/api/music/getMusic/${currentUser}`,
      {
        headers: new HttpHeaders().set("Authorization",`Bearer ${bearerToken}`)
      }).subscribe(data=>{
      
       this.music=data;
      
       this.musicSubject.next(this.music);
       });
      }


  }


  