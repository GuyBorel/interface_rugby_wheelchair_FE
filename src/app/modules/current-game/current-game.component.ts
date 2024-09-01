import { Component } from '@angular/core';
import { VideoViewService } from '../../services/video-view.service';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-current-game',
  standalone: true,
  imports: [NgIf, NgOptimizedImage],
  templateUrl: './current-game.component.html',
  styleUrl: './current-game.component.css',
})
export class CurrentGameComponent {
  videoPath: string;

  constructor(serviceVideoView: VideoViewService) {
    this.videoPath = serviceVideoView.getVideoPath();
  }
}
