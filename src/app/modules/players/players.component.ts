import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Add this for ngModel support
import { DatabaseService } from '../../services/database.service'; // Ensure the service path is correct

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add CommonModule and FormsModule
  templateUrl: './players.component.html',
})
export class PlayersComponent implements OnInit {
  teams: any[] = [];
  players: any[] = [];
  selectedTeamId: number | null = null;

  constructor(private databaseService: DatabaseService) {}

  ngOnInit() {
    this.databaseService.getClubs().subscribe(
      (data) => {
        this.teams = data;
      },
      (error) => {
        console.error('Error fetching teams:', error);
      }
    );
  }

  onTeamSelect() {
    if (this.selectedTeamId !== null) {
      this.databaseService.getPlayers(this.selectedTeamId).subscribe(
        (data) => {
          this.players = data;
        },
        (error) => {
          console.error('Error fetching players:', error);
        }
      );
    }
  }
}
