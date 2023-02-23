import { Component, OnInit } from '@angular/core';
import { RecommendService } from '../services/recommend.service';
import { Song } from '../model/song';
import { window, windowToggle } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {

  recommended;
  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

    search : string;
     music : Song = new Song();

   musicList : Array<any> = new Array<any>();

   albumName : Array<any> = new Array<any>();
   artistName : Array<any> = new Array<any>();
  
   
  constructor(private recommendService : RecommendService, private toastr : ToastrService)
  {}
  ngOnInit()
  {
     this.recommendService.readMusic().subscribe(response=>{
       if(response)
       {
         this.musicList=response['tracks']; 
        
       }
     },error=>{})
  }

  



addMusic(music : any) : void
{

  console.log('music',music)
 this.recommendService.addMusic(music).subscribe(response=>{

  this.toastr.success('Recommended');
   
   /* alert('Recommended'); */
 
 }, error=>{
  this.toastr.error('You need to log in');
   console.log("Unable to reach the site", error);
 });
}



 addFavourite(music : any) : void
{

  console.log('music',music)
 this.recommendService.addFavourite(music).subscribe(response=>{

  this.toastr.success('Added');
   
   
 
 }, error=>{
  this.toastr.error('You need to log in');
   console.log("Unable to reach the site", error);
 });
}
 


}

