import { Injectable } from '@angular/core';

export interface Match {
  id: number;
  equipe: string;
  adversaire: string;
  score: string;
  date: string;
}
@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getMatchs(): Match[] {
    return [
      { id: 1, equipe: 'Équipe A', adversaire: 'Équipe B', score: '2-1', date: '2024-09-01' },
      { id: 2, equipe: 'Équipe C', adversaire: 'Équipe D', score: '1-3', date: '2024-09-02' },
      { id: 3, equipe: 'Équipe E', adversaire: 'Équipe F', score: '0-0', date: '2024-09-03' },
    ];
  }
}
