import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class RobotControlService {
  private apiUrl = 'http://192.168.43.78:5000'; // Server URL
  private socket: Socket;
  private connected = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.initializeWebSocketConnection();
    this.socket = io(this.apiUrl);  // Initialization within the constructor
  }

  initializeWebSocketConnection() {
    this.socket = io(this.apiUrl);
    this.socket.on('status_update', (data: { connected: boolean }) => {
      this.connected.next(data.connected);
    });
    this.socket.on('connect', () => {
      console.log('Connected to server via WebSocket');
      this.socket.emit('check_status');  // Ask for current status immediately on connection
    });
    this.socket.on('disconnect', () => {
      this.connected.next(false);
      console.log('Socket disconnected');
    });
  }

  isConnected(): Observable<boolean> {
    return this.connected.asObservable();
  }


  setDirection(direction: string): void {
    this.http.post(`${this.apiUrl}/set_direction`, { direction }).subscribe({
      next: response => console.log('Direction set', response),
      error: error => console.error('Error setting direction', error)
    });
  }

  sendCommand(command: string): void {
    this.socket.emit('send_command', { command });
  }

  getDirection(): string {
    return 'stop';
  }
}
