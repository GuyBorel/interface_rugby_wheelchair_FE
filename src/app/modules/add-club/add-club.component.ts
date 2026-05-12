import { Component } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./add-club.component.css'],
})
export class AddClubComponent {
  clubData = {
    name: '',
    city: '',
    established_year: null,
  };

  constructor(private databaseService: DatabaseService) {}

  onSubmit() {
    this.databaseService.addClub(this.clubData).subscribe((response) => {
      console.log('Club added:', response);
      // Optionnel: Réinitialiser le formulaire après l'ajout
      this.clubData = { name: '', city: '', established_year: null };
    });
  }
}
