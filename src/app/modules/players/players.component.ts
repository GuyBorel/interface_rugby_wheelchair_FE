import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Add this for ngModel support
import { DatabaseService } from '../../services/database.service'; // Ensure the service path is correct
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [
    NgForOf, CommonModule, FormsModule
  ],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css',
})

export class PlayersComponent implements OnInit {
  teams: any[] = [];
  players: any[] = [];
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
        },
        (error) => {
          console.error('Error fetching players:', error);
        }
      );
    }
  }
}
