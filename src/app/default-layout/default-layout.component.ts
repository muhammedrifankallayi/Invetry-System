import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApplyFormPopupComponent } from '../popups/apply-form-popup/apply-form-popup.component';
import { RegisterFormComponent } from '../register-form/register-form.component';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent {

  constructor(private dialog:MatDialog){}

  ngAfterViewInit() {
    // Load the YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if(firstScriptTag.parentNode){
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
   
  }

  playVideo(videoId: string) {
    const iframe = document.getElementById(videoId) as HTMLIFrameElement;
    const player = new (window as any).YT.Player(iframe, {
      events: {
        'onReady': (event: any) => event.target.playVideo()
      }
    });
  }


  OpenApply(){
this.dialog.open(ApplyFormPopupComponent,{
  
})
  }
  RoadMap(tp:number){
    if(tp==1){
      
    }
  }


openRegisterFrom(){
  this.dialog.open(
    RegisterFormComponent,
    {
      disableClose:true,
      width:"400px"
    }
  )
}

}
