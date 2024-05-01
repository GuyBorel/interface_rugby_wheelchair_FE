import {Component, OnInit, OnDestroy, NgZone} from '@angular/core';
import {BallData, VideoRobotViewService} from "../video-robot-view.service";
import { HttpClient } from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {NgForOf} from "@angular/common";
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-mode-suiveur-de-balle',
  standalone: true,
  templateUrl: './mode-suiveur-de-balle.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./mode-suiveur-de-balle.component.css']
})
export class ModeSuiveurDeBalleComponent implements OnInit, OnDestroy {
  videoPath: string;
  balls:BallData[] = [];
  selectedColor: string = 'jaune';
  private subscriptions: Subscription = new Subscription();

  constructor(private service: VideoRobotViewService, private http: HttpClient,
              private ngZone: NgZone,private cdr: ChangeDetectorRef) {
    this.videoPath = service.getVideoPath();

  }
  getBallData(){
    return this.service.getBallData()
  }
  ngOnInit() {
    this.subscriptions.add(
      this.service.getBallData().subscribe(data => {
        console.log('Data received:', data);  // Check the structure here
        this.ngZone.run(() => { // Ensure update is recognized by Angular
          this.balls = data;
          this.cdr.detectChanges(); // Manually trigger change detection
        });
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}


