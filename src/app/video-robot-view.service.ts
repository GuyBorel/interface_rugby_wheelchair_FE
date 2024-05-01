import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from "rxjs/operators";
import {HttpClient} from '@angular/common/http';

export interface BallData {
  area: number;
  color: string;
  position: number[];

}

@Injectable({
  providedIn: 'root'
})
export class VideoRobotViewService {
  private apiUrl = 'http://192.168.1.69:5000';
  constructor(private http: HttpClient) {}



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
