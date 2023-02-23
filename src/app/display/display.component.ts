import { Component, OnInit } from '@angular/core';
import { RecommendService } from '../services/recommend.service';
import { Song } from '../model/song';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

 
   music : Song=new Song();
   email : String;
   favourites:Array<any>=new Array<any>();

   musicList : Array<any> = new Array<any>();

   albumName : Array<any> = new Array<any>();
   artistName : Array<any> = new Array<any>();
  

   

  constructor(private recommendService : RecommendService, private toastr : ToastrService)
  {

  }


  
   ngOnInit():void
  {
    this.recommendService.getMusic(this.music.email).subscribe(response=>
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
        console.log(error)
      }

    );
  }
 




deleteMusic(music) {
  console.log(music)
  this.recommendService.deleteMusic(music).subscribe( response => {
    this.toastr.info('Unrecommended');
    console.log('unrecommended');
    
    
  }, err=>{
    console.log(err);
  }, () =>{
    this.ngOnInit();
  })
}

}


