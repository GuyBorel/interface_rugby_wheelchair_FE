import { Component } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./add-match.component.css'],
})
export class AddMatchComponent {
  matchData = {
    championship_id: null,
    date: '',
    team_1_id: null,
    team_2_id: null,
    team_1_score: null,
    team_2_score: null,
  };

  constructor(private databaseService: DatabaseService) {}

  onSubmit() {
    this.databaseService.addMatch(this.matchData).subscribe((response) => {
      console.log('Match added:', response);
      this.matchData = {
        championship_id: null,
        date: '',
        team_1_id: null,
        team_2_id: null,
        team_1_score: null,
        team_2_score: null,
      };
    });
  }
}
