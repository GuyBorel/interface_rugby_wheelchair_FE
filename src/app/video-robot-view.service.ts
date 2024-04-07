import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoRobotViewService {

  constructor() { }

  getVideoPath(){
    return "assets/video/Placeholder video.mp4";
  }

  getBallPosition():number[]{
    let x = 10;
    let y=20;
    return [x,y];
  }

  getBallDistance() {
    let distance = 30;
    return distance;
  }
}
