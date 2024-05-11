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
    this.serviceRobotControl.sendCommand('Avancer');  // Sends 'Avancer' command to the backend
  }

  reculer() {
    this.serviceRobotControl.sendCommand('Reculer');  // Sends 'Reculer' command to the backend
  }

  stopRobot() {
    this.serviceRobotControl.sendCommand('Stop');  // Sends 'Stop' command to the backend
  }

  tournerDroite() {
    this.serviceRobotControl.sendCommand('Droite');  // Sends 'Droite' command to the backend
  }

  tournerGauche() {
    this.serviceRobotControl.sendCommand('Gauche');  // Sends 'Gauche' command to the backend
  }

  getDirection() {
    return this.serviceRobotControl.getDirection();  // Retrieves the current direction
  }



}
