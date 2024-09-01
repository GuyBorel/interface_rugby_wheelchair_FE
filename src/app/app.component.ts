import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { TitreComponent } from './titre/titre.component';
import { MenuService, Mode } from './services/menu.service';
import { ModePilotageManuelComponent } from './mode-pilotage-manuel/mode-pilotage-manuel.component';
import { ModeSuiveurDeBalleComponent } from './mode-suiveur-de-balle/mode-suiveur-de-balle.component';
import { NgForOf, NgIf } from '@angular/common';
import { ModeCartographieComponent } from './mode-cartographie/mode-cartographie.component';
import { BoutonStopComponent } from './bouton-stop/bouton-stop.component';
import { ModeCommandeVocaleComponent } from './mode-commande-vocale/mode-commande-vocale.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentGameComponent } from './modules/current-game/current-game.component';
import {GamesComponent} from "./modules/games/games.component";
import {PlayersComponent} from "./modules/players/players.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    TitreComponent,
    ModePilotageManuelComponent,
    ModeSuiveurDeBalleComponent,
    NgIf,
    ModeCartographieComponent,
    BoutonStopComponent,
    ModeCommandeVocaleComponent,
    HttpClientModule,
    NgForOf,
    CurrentGameComponent,
    GamesComponent,
    PlayersComponent,
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
