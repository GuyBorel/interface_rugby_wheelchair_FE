import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RobotControlService {
  private direction: string;

  constructor(private http: HttpClient) {
    this.direction = "Arret";
  }

  getDirection() {
    return "Avance";
  }

  setDirection(direction: string) {
    this.direction = direction;
    this.http.post('http://192.168.1.187:31000/set_direction', { direction: this.direction }).subscribe({
      next: response => console.log('Direction set', response),
      error: error => console.error('Error setting direction', error)
    });
  }

  envoyerCommande() {
    // TODO Implémenter la logique pour envoyer une commande
  }

  envoyerAudio(audioBlob: Blob) {
    // TODO Implémenter la logique pour envoyer l'audio
  }
}
