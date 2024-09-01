import { Component } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-championship',
  templateUrl: './add-championship.component.html',
  styleUrls: ['./add-championship.component.css'],
  standalone: true,
  imports: [FormsModule],  // Assurez-vous que FormsModule est inclus ici
})
export class AddChampionshipComponent {
  championshipData = {
    year: null,
    division: '',
    champion_club_id: null
  };

  constructor(private databaseService: DatabaseService) {}

  onSubmit() {
    this.databaseService.addChampionship(this.championshipData).subscribe(response => {
      console.log('Championship added:', response);
      this.championshipData = { year: null, division: '', champion_club_id: null };
    });
  }
}
