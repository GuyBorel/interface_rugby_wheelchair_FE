import { Component, OnInit } from '@angular/core';
import { VideoViewService } from '../../services/video-view.service';
import { NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-current-game',
  standalone: true,
  imports: [NgIf, NgOptimizedImage, NgForOf, ReactiveFormsModule, FormsModule],
  templateUrl: './current-game.component.html',
  styleUrl: './current-game.component.css',
})
export class CurrentGameComponent implements OnInit {
  videoPath: string;
  selectedPlayerId: number | null = null;
  teams: any[] = [];
  players: any[] = [];
  attackers: any[] = []; // Declare the attackers array
  defenders: any[] = [];
  selectedPlayer: any = null; // Declare the selectedPlayer
  selectedTeamId: number | null = null;

  constructor(
    serviceVideoView: VideoViewService,
    private databaseService: DatabaseService,
  ) {
    this.videoPath = serviceVideoView.getVideoPath();
  }

  ngOnInit() {
    this.databaseService.getClubs().subscribe(
      (data) => {
        this.teams = data;
      },
      (error) => {
        console.error('Error fetching teams:', error);
      },
    );
  }

  onTeamSelect() {
    if (this.selectedTeamId !== null) {
      this.databaseService.getPlayers(this.selectedTeamId).subscribe(
        (data) => {
          this.players = data;
          this.selectedPlayer = null; // Reset selected player when the team changes
          this.attackers = this.players.filter(
            (player) => player.position === 'Attacker',
          );
          this.defenders = this.players.filter(
            (player) => player.position === 'Defender',
          );
          console.log('Attackers:', this.attackers);
          console.log('Defenders:', this.defenders);
        },
        (error) => {
          console.error('Error fetching players:', error);
        },
      );
    }
  }

  onPlayerSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement; // Type assertion
    const playerId = parseInt(selectElement.value, 10); // Get the selected value and convert to number
    this.selectedPlayer =
      this.players.find((player) => player.id === playerId) || null;
    console.log('Selected Player:', this.selectedPlayer);
  }

  protected readonly Math = Math;
}
