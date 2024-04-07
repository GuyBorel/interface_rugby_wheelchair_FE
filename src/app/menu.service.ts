import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private modes = [
    { label: 'Pilotage manuel', active: true },
    { label: 'Suiveur de balle', active: false },
    { label: 'Commande vocale', active: false },
    { label: 'Cartographie', active: false }
  ];

  // BehaviorSubject pour maintenir et émettre l'état actif des modes
  private modesSubject = new BehaviorSubject(this.modes);
  modes$ = this.modesSubject.asObservable();

  constructor() { }



  setModeActive(i: number) {
    if (i >= 0 && i < this.modes.length) {
      this.modes.forEach((mode, index) => mode.active = index === i);
      this.modesSubject.next(this.modes);
    }
  }

  isModeActive(index: number): boolean {
    return index >= 0 && index < this.modes.length ? this.modes[index].active : false;
  }

  getSelectedMode(): { label: string, active: boolean } | null {
    return this.modes.find(mode => mode.active) || null;
  }
}
