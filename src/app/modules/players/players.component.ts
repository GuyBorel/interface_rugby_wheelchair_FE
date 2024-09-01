import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css',
})
export class PlayersComponent {
  items = [
    { column1: 'Row 1, Column 1', column2: 'Row 1, Column 2' },
    { column1: 'Row 2, Column 1', column2: 'Row 2, Column 2' },
    { column1: 'Row 3, Column 1', column2: 'Row 3, Column 2' },
    // Add more rows as needed
  ];
}
