import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import {
  BallData,
  VideoRobotViewService,
} from '../services/video-robot-view.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { NgForOf } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-mode-suiveur-de-balle',
  standalone: true,
  templateUrl: './mode-suiveur-de-balle.component.html',
  imports: [NgForOf],
  styleUrls: ['./mode-suiveur-de-balle.component.css'],
})
export class ModeSuiveurDeBalleComponent implements OnInit, OnDestroy {
  videoPath: string;
  balls: BallData[] = [];
  colorOptions = ['bleu', 'orange', 'jaune', 'blanc', 'vert clair', 'or'];
  selectedColors: string[] = []; // Modifié pour être un tableau de chaînes
  private subscriptions: Subscription = new Subscription();

  constructor(
    private videoRobotViewService: VideoRobotViewService,
    private http: HttpClient,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef,
  ) {
    this.videoPath = videoRobotViewService.getVideoPath();
  }

  updateSelection(event: any) {
    if (event.target.checked) {
      this.selectedColors.push(event.target.value);
    } else {
      this.selectedColors = this.selectedColors.filter(
        (color) => color !== event.target.value,
      );
    }
  }

  submitColors(selectedColors: string[]): void {
    this.videoRobotViewService.updateActiveColors(selectedColors).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error('Error updating colors:', error),
    });
  }

  ngOnInit() {
    this.subscriptions.add(
      this.videoRobotViewService.listen('ball_data').subscribe({
        next: (data) => {
          this.ngZone.run(() => {
            this.balls = this.transformData(data);
            this.cdr.detectChanges(); // Assure la mise à jour de la vue avec les nouvelles données
          });
        },
        error: (error) =>
          console.error(
            'Erreur lors de la réception des données de balles:',
            error,
          ),
      }),
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe(); // Prévient les fuites de mémoire
  }

  private transformData(data: any): any[] {
    // Analyser et transformer les données au besoin
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }
    // Assure que les données sont dans le bon format, en particulier pour 'position'
    return data.map((ball: any) => ({
      ...ball,
    }));
  }
}
