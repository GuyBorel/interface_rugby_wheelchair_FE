import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RobotControlService } from "../robot-control.service";
import { MenuService } from "../menu.service";
import { NgIf, NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-titre',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.css']
})
export class TitreComponent implements OnInit, OnDestroy {
  mode: string;
  title: string;
  isConnected: boolean = false;
  private statusSubscription: Subscription;
  menu: MenuService;

  constructor(private robotControlService: RobotControlService, private menuService: MenuService) {
    this.menu = menuService;
    this.mode = "Mode Selection";
    this.title = "Mode ";
    // Subscribe to connection status updates
    this.statusSubscription = this.robotControlService.isConnected().subscribe(isConnected => {
      this.isConnected = isConnected;  // Use this to display connection status in your template
    });
  }

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.statusSubscription.unsubscribe();
  }

  ngOnInit(): void {
  }
}
