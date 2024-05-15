import {Component, EventEmitter, Output} from '@angular/core';
import {RobotControlService} from "../robot-control.service";

@Component({
  selector: 'app-bouton-stop',
  standalone: true,
  imports: [],
  templateUrl: './bouton-stop.component.html',
  styleUrl: './bouton-stop.component.css'
})


export class BoutonStopComponent {
  @Output() arretUrgence = new EventEmitter<void>();
  constructor(private serviceRobotControl: RobotControlService) {
  }
  arreterUrgence() {
    this.serviceRobotControl.sendCommand('S');
  }
}
