import { Component, OnDestroy, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { RobotControlService } from "../robot-control.service";
import {MenuService, Mode} from "../menu.service";
import {AsyncPipe, JsonPipe, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-titre',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.css']
})
export class TitreComponent implements OnInit, OnDestroy {
  isConnected: boolean | undefined;
  private statusSubscription: Subscription;
  menu: MenuService;
  currentMode$: Observable<Mode>;
  modes$: Observable<Mode[]>;

  constructor(private robotControlService: RobotControlService, private menuService: MenuService) {
    this.menu = menuService;
    this.modes$ = this.menuService.modes$;
    this.currentMode$ = this.menuService.getSelectedMode();
    // Subscribe to connection status updates
    this.statusSubscription = this.robotControlService.isConnected().subscribe(isConnected => {
      this.isConnected = isConnected;
    });
  }

  getSelectedMode() {
    return this.currentMode$;
  }

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.statusSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.menuService.fetchAvailableModes();
  }
}
