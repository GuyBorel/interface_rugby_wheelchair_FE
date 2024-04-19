import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RobotControlService {
  private direction: string;

  constructor() {
    this.direction = "Arret";
  }

  getDirection() {
    return "Avance";
  }

  setDirection(direction: string) {
    this.direction = direction;
  }

  envoyerCommande() {
    // TODO Implémenter la logique pour envoyer une commande
  }

  envoyerAudio(audioBlob: Blob) {
    // TODO Implémenter la logique pour envoyer l'audio
  }
}
