import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { io } from 'socket.io-client';


export interface BallData {
  area: number;
  color: string;
  position: number[];

}

export interface SelectedColors {
  status:string;
  activeColors: string[];

}

@Injectable({
  providedIn: 'root'
})
export class VideoRobotViewService {
  private socket: any;
  private apiUrl = 'http://192.168.1.69:5000';
  constructor(private http: HttpClient) {
    this.socket = io(this.apiUrl);
  }

  // Emit data to server
  emit(event: string, data: any) {
    this.socket.emit(event, data);
  }
  // Listen for events from the server
  listen(eventName: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        console.log('Received data:', data);  // Log received data
        subscriber.next(data);
      });
    });
  }

  updateActiveColors(selectedColors: string[]): Observable<SelectedColors> {
    return this.http.post<SelectedColors>(this.apiUrl+'/update_active_colors', {colors: selectedColors});
  }

  getVideoPath(): string {
    return this.apiUrl+'/video_feed';
  }

  getMapPath():string{
    return this.apiUrl+'/map_feed';
  }

  startMapping(): Observable<any> {
    return this.http.post(this.apiUrl + '/start_mapping', {});
  }
}


