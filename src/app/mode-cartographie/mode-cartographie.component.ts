import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { VideoViewService } from '../services/video-view.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-mode-cartographie',
  standalone: true,
  imports: [NgOptimizedImage, NgIf],
  templateUrl: './mode-cartographie.component.html',
  styleUrl: './mode-cartographie.component.css',
})
export class ModeCartographieComponent {
  mapPath: string;
  showMap: boolean = false;
  videoPath: string;

  constructor(
    private videoRobotViewService: VideoViewService,
  ) {
    this.mapPath = videoRobotViewService.getMapPath();
    this.videoPath = videoRobotViewService.getVideoPath();
  }

  toggleView(): void {
    this.showMap = !this.showMap;
  }

  startMapping() {
    this.videoRobotViewService.startMapping().subscribe((response) => {
      console.log('Mapping started:', response);
    });
  }
}
