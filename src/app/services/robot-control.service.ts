import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RobotControlService {
  private apiUrl = 'http://192.168.80.229:5000';
  private connected = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {}

  isConnected(): Observable<boolean> {
    return this.connected.asObservable();
  }

  sendCommand(command: string): void {
    const url = `${this.apiUrl}/send_command`; // Correct endpoint
    this.http.post(url, { command: command }).subscribe({
      next: (response) => console.log('Command sent successfully', response),
      error: (error) => console.error('Error sending command', error),
    });
  }

  getDirection(): string {
    return 'stop'; // Implement direction retrieval logic if necessary
  }
}
