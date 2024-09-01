import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Add this for ngModel support
import { DatabaseService } from '../../services/database.service';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [
    NgForOf, CommonModule, FormsModule, NgOptimizedImage
  ],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css',
})

export class PlayersComponent implements OnInit {
  teams: any[] = [];
  players: any[] = [];
  attackers: any[] = []; // Declare the attackers array
  defenders: any[] = []; // Declare the defenders array
  selectedTeamId: number | null = null;
  items = [
    { column1: 'Row 1, Column 1', column2: 'Row 1, Column 2' },
    { column1: 'Row 2, Column 1', column2: 'Row 2, Column 2' },
    { column1: 'Row 3, Column 1', column2: 'Row 3, Column 2' },
    // Add more rows as needed
  ];
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
          this.attackers = this.players.filter(player => player.position === 'Attacker');
          this.defenders = this.players.filter(player => player.position === 'Defender');
          console.log('Attackers:', this.attackers);
          console.log('Defenders:', this.defenders);
        },
        (error) => {
          console.error('Error fetching players:', error);
        }
      );
    }
  }


  imageError(event: any) {
    event.target.src = 'assets/images/default-placeholder.png';
  }

  categorizePlayers() {
    this.attackers = this.players.filter(player => player.position === 'Attacker');
    this.defenders = this.players.filter(player => player.position === 'Defender');
  }

  protected readonly Math = Math;
}
