import {ChangeDetectorRef, Component, NgZone} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {VideoRobotViewService} from "../video-robot-view.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-mode-cartographie',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './mode-cartographie.component.html',
  styleUrl: './mode-cartographie.component.css'
})
export class ModeCartographieComponent {
   mapPath:string;
  constructor(
    private videoRobotViewService: VideoRobotViewService,
    private http: HttpClient,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {
    this.mapPath = videoRobotViewService.getMapPath();
  }



  startMapping() {
    this.videoRobotViewService.startMapping().subscribe(response => {
      console.log('Mapping started:', response);
    });
  }
}
