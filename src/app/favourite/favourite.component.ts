import { Component, OnInit } from '@angular/core';
import { RecommendService } from '../services/recommend.service';
import { Song } from '../model/song';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  musics : Song=new Song();

  musicList : Array<any> = new Array<any>();

  albumName : Array<any> = new Array<any>();
  artistName : Array<any> = new Array<any>();
 

  

 constructor(private recommendService : RecommendService, private toastr : ToastrService)
 {

 }

 ngOnInit()
 {
   this.recommendService.getFavourite(this.musics.email).subscribe(response=>
     {
       if(response)
       {
          this.musicList=response; 
       }
       else
       {
         console.log("We are unable to retrieve")
       }
     },error=>
     {
       console.log("http failure and the server is not found!!!")
     }

   );
 }


 deleteFavourite(music) {
  console.log(music)
  this.recommendService.deleteFavourite(music).subscribe( response => {
    this.toastr.warning('Removed');
    console.log('unrecommended');
    
    
  }, err=>{
    console.log(err);
  }, () =>{
    this.ngOnInit();
  })
}

}






