import {Component} from '@angular/core';
import {VideoRobotViewService} from "../video-robot-view.service";
import {RobotControlService} from "../robot-control.service";

@Component({
  selector: 'app-mode-pilotage-manuel',
  standalone: true,
  imports: [],
  templateUrl: './mode-pilotage-manuel.component.html',
  styleUrl: './mode-pilotage-manuel.component.css'
})
export class ModePilotageManuelComponent {

  videoPath: string;
  private direction: string;

  constructor(serviceVideoRobotView: VideoRobotViewService, serviceRobotControl: RobotControlService) {
    this.videoPath = serviceVideoRobotView.getVideoPath();
    this.direction = serviceRobotControl.getDirection();
  }

  avancer() {
    this.direction = "Avancer";
  }

  reculer() {
    this.direction = "Reculer";
  }

  stopRobot() {
    this.direction = "Stop";
  }

  tournerDroite() {
    this.direction = "Droite";
  }

  tournerGauche() {
    this.direction = "Gauche";
  }

  getDirection() {
    return this.direction;
  }


}
