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

  constructor(private serviceVideoRobotView: VideoRobotViewService, private serviceRobotControl: RobotControlService) {
    this.videoPath = serviceVideoRobotView.getVideoPath();
    this.direction = serviceRobotControl.getDirection();
  }

  avancer() {
    this.serviceRobotControl.sendCommand('F');

  }

  reculer() {
    this.serviceRobotControl.sendCommand('B');
  }

  tournerDroite() {
    this.serviceRobotControl.sendCommand('R');
  }

  tournerGauche() {
    this.serviceRobotControl.sendCommand('L');
  }

  stopRobot() {
    this.serviceRobotControl.sendCommand('S');
  }

  getDirection() {
    return this.serviceRobotControl.getDirection();  // Retrieves the current direction
  }



}
