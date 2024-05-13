import {Component} from '@angular/core';
import {VideoRobotViewService} from "../video-robot-view.service";
import {RobotControlService} from "../robot-control.service";
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-mode-pilotage-manuel',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './mode-pilotage-manuel.component.html',
  styleUrl: './mode-pilotage-manuel.component.css'
})
export class ModePilotageManuelComponent {

  videoPath: string;
  private direction: string;
  mapPath: string;
  showMap: boolean = false;


  constructor(private serviceVideoRobotView: VideoRobotViewService, private serviceRobotControl: RobotControlService) {
    this.videoPath = serviceVideoRobotView.getVideoPath();
    this.direction = serviceRobotControl.getDirection();
    this.mapPath = serviceVideoRobotView.getMapPath();
  }
  toggleView(): void {
    this.showMap = !this.showMap;
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
