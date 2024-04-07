import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {TitreComponent} from "./titre/titre.component";
import {MenuService} from "./menu.service";
import {ModePilotageManuelComponent} from "./mode-pilotage-manuel/mode-pilotage-manuel.component";
import {ModeSuiveurDeBalleComponent} from "./mode-suiveur-de-balle/mode-suiveur-de-balle.component";
import {NgIf} from "@angular/common";
import {ModeCartographieComponent} from "./mode-cartographie/mode-cartographie.component";
import {BoutonStopComponent} from "./bouton-stop/bouton-stop.component";
import {ModeCommandeVocaleComponent} from "./mode-commande-vocale/mode-commande-vocale.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, TitreComponent, ModePilotageManuelComponent, ModeSuiveurDeBalleComponent, NgIf, ModeCartographieComponent, BoutonStopComponent, ModeCommandeVocaleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interface_robot_exploreur';
  constructor(public menuService: MenuService) {
  }
}
