import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoRobotViewService {

  constructor() { }


  private videoUrl = 'http://192.168.1.41:8080/video_feed';

  getVideoPath(): string {
    return this.videoUrl;
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
