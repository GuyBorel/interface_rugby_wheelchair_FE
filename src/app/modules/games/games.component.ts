import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Match } from '../../models/match.model';
import { DatePipe, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-games',
  standalone: true,
  templateUrl: './games.component.html',
  imports: [DatePipe, FormsModule, NgForOf],
})
export class GamesComponent implements OnInit {
  championships: any[] = [];
  selectedChampionshipId: number | null = null;
  matches: Match[] = [];

  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.databaseService.getChampionships().subscribe(
      (data) => {
        this.championships = data;
      },
      (error) => {
        console.error('Error fetching championships:', error);
      },
    );
  }

  onChampionshipSelect(): void {
    if (this.selectedChampionshipId !== null) {
      this.databaseService.getMatches(this.selectedChampionshipId).subscribe(
        (data) => {
          this.matches = data;
        },
        (error) => {
          console.error('Error fetching matches:', error);
        },
      );
    }
  }
}
