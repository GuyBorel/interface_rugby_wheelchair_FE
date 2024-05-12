import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { io } from 'socket.io-client';
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

export interface  Mode {
  label: string;
  active: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private modes:Mode[] = []
  // BehaviorSubject pour maintenir et émettre l'état actif des modes
  private modesSubject = new BehaviorSubject(this.modes);
  modes$ = this.modesSubject.asObservable();
  private currentMode = new BehaviorSubject<{ label: string; active: boolean }>({ label: 'Pilotage manuel', active: true });
  private socket: any;
  private apiUrl = 'http://192.168.80.78:5000';

  constructor(private http: HttpClient) {
    this.socket = io(this.apiUrl); // Adjust URL to match your Flask server
    this.socket.on('mode_updated', (mode: { label: string; active: boolean }) => {
    this.currentMode.next(mode);
    this.fetchAvailableModes();
    });

  }



  changeMode(mode: Mode): void {
    // Set all modes to inactive and then activate the requested mode
    this.modes.forEach(m => m.active = false);
    const foundMode = this.modes.find(m => m.label === mode.label);
    if (foundMode) {
      foundMode.active = true;
    }
    this.modesSubject.next(this.modes);
    this.socket.emit('change_mode', mode);
    console.log("Mode changed to " + mode.label);
  }

  listenForModeChanges(): void {
    this.socket.on('modes_updated', (updatedModes: Mode[]) => {
      this.modes = updatedModes;
      this.modesSubject.next(this.modes);
    });
  }

  getSelectedMode(): Observable<Mode> {
    return this.modesSubject.asObservable().pipe(
      map(modes => modes.find(mode => mode.active) || modes[0])
    );
  }

  fetchAvailableModes(): void {
    this.http.get<Mode[]>(`${this.apiUrl}/available_modes`)
      .subscribe({
        next: (modes) => {
          this.modesSubject.next(modes);
        },
        error: (error) => {
          console.error('Error fetching modes:', error);
        }
      });
  }

 getModes():Mode[]{
    return this.modes;
 }

  isModeActive(index: number, modes: { label: string; active: boolean }[]): boolean {
    return index >= 0 && index < modes.length ? modes[index].active : false;
  }

}
