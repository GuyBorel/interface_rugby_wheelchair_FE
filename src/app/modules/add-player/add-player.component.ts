import { Component } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./add-player.component.css'],
})
export class AddPlayerComponent {
  playerData = {
    first_name: '',
    last_name: '',
    photo_url: '',
    rating: null,
    position: '',
    club_id: null,
  };

  constructor(private databaseService: DatabaseService) {}

  onSubmit() {
    this.databaseService.addPlayer(this.playerData).subscribe((response) => {
      console.log('Player added:', response);
      this.playerData = {
        first_name: '',
        last_name: '',
        photo_url: '',
        rating: null,
        position: '',
        club_id: null,
      };
    });
  }
}
