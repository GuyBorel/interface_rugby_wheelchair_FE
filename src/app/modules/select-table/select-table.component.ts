import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddMatchComponent } from '../add-match/add-match.component';
import { AddChampionshipComponent } from '../add-championship/add-championship.component';
import { AddClubComponent } from '../add-club/add-club.component';
import { AddPlayerComponent } from '../add-player/add-player.component';

@Component({
  selector: 'app-select-table',
  standalone: true,
  imports: [CommonModule, FormsModule, AddMatchComponent, AddChampionshipComponent, AddClubComponent, AddPlayerComponent],
  templateUrl: './select-table.component.html',
  styleUrls: ['./select-table.component.css']
})
export class SelectTableComponent {
  selectedComponent: string = '';
  components = [
    { label: 'Add Match', value: 'add-match' },
    { label: 'Add Championship', value: 'add-championship' },
    { label: 'Add Club', value: 'add-club' },
    { label: 'Add Player', value: 'add-player' }
  ];

  onSelectComponent(component: string) {
    this.selectedComponent = component;
  }
}
