import {Component} from '@angular/core';
import {VideoRobotViewService} from "../video-robot-view.service";

@Component({
  selector: 'app-mode-suiveur-de-balle',
  standalone: true,
  imports: [],
  templateUrl: './mode-suiveur-de-balle.component.html',
  styleUrl: './mode-suiveur-de-balle.component.css'
})
export class ModeSuiveurDeBalleComponent {
  videoPath;
  ballPosition: number[];
  ballDistance: number;

  constructor(service: VideoRobotViewService) {
    this.videoPath = service.getVideoPath();
    this.ballPosition = service.getBallPosition();
    this.ballDistance = service.getBallDistance();
  }

}
