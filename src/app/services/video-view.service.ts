import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { io } from 'socket.io-client';

export interface BallData {
  area: number;
  color: string;
  position: number[];
}

export interface SelectedColors {
  status: string;
  activeColors: string[];
}

@Injectable({
  providedIn: 'root',
})
export class VideoViewService {
  private socket: any;
  private apiUrl = 'http://10.18.9.234:5000';
  constructor(private http: HttpClient) {
    this.socket = io(this.apiUrl);
  }

  getVideoPath(): string {
    return this.apiUrl + '/video_feed';
  }
}
