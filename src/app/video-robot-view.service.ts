import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from "rxjs/operators";
import {HttpClient} from '@angular/common/http';
import { io } from 'socket.io-client';


export interface BallData {
  area: number;
  color: string;
  position: number[];

}

@Injectable({
  providedIn: 'root'
})
export class VideoRobotViewService {
  private socket: any;
  private apiUrl = 'http://obvault.duckdns.org:31400';
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

  getBallData(): Observable<BallData[]> {
    return this.http.get<BallData[]>(`${this.apiUrl}/get_detections`).pipe(
      tap(response => console.log("Réponse de get_detections:", response)),
      catchError((error: any) => {
        console.error("Erreur lors de l'acces à get_detections:", error);
        return throwError(() => new Error(error));
      })
    );
  }

  getVideoPath(): string {
    return this.apiUrl+'/video_feed';
  }
}
