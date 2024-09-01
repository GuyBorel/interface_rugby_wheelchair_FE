import {Component, OnInit} from '@angular/core';
import {GameService, Match} from "../../services/game.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent implements OnInit {
  matchs: Match[] = [];

  constructor(private matchService: GameService) { }

  ngOnInit(): void {
    this.matchs = this.matchService.getMatchs();
  }
}
