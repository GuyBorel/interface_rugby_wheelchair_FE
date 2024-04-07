import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bouton-stop',
  standalone: true,
  imports: [],
  templateUrl: './bouton-stop.component.html',
  styleUrl: './bouton-stop.component.css'
})


export class BoutonStopComponent {
  @Output() arretUrgence = new EventEmitter<void>();

  arreterUrgence() {
    this.arretUrgence.emit();
  }
}
