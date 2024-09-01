import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { TitreComponent } from './titre/titre.component';
import { MenuService, Mode } from './services/menu.service';
import { NgForOf, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentGameComponent } from './modules/current-game/current-game.component';
import {GamesComponent} from "./modules/games/games.component";
import {PlayersComponent} from "./modules/players/players.component";
import {SelectTableComponent} from "./modules/select-table/select-table.component";
import { FormsModule } from '@angular/forms'; // Import FormsModule


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    TitreComponent,
    FormsModule,
    NgIf,
    HttpClientModule,
    NgForOf,
    CurrentGameComponent,
    GamesComponent,
    PlayersComponent,
    SelectTableComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title: string = 'interface_robot_exploreur';
  modes$: Observable<Mode[]>;
  constructor(public menuService: MenuService) {
    this.modes$ = this.menuService.modes$;
  }

  activateMode(index: number): void {
    this.menuService.changeMode(this.menuService.getModes()[index]); // Assuming changeMode expects a mode object
  }

  getModes(): Mode[] {
    return this.menuService.getModes();
  }

  ngOnInit() {
    this.menuService.fetchAvailableModes(); // Optionally refetch or ensure modes are fetched
  }
}
