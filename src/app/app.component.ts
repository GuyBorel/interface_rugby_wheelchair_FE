import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {TitreComponent} from "./titre/titre.component";
import {MenuService, Mode} from "./menu.service";
import {ModePilotageManuelComponent} from "./mode-pilotage-manuel/mode-pilotage-manuel.component";
import {ModeSuiveurDeBalleComponent} from "./mode-suiveur-de-balle/mode-suiveur-de-balle.component";
import {NgForOf, NgIf} from "@angular/common";
import {ModeCartographieComponent} from "./mode-cartographie/mode-cartographie.component";
import {BoutonStopComponent} from "./bouton-stop/bouton-stop.component";
import {ModeCommandeVocaleComponent} from "./mode-commande-vocale/mode-commande-vocale.component";
import {HttpClientModule} from '@angular/common/http';
import {AudioService} from "./audio.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, TitreComponent, ModePilotageManuelComponent, ModeSuiveurDeBalleComponent, NgIf, ModeCartographieComponent, BoutonStopComponent, ModeCommandeVocaleComponent,
    HttpClientModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'interface_robot_exploreur';

  constructor(public menuService: MenuService, private audioService: AudioService) {}

  activateMode(index: number): void {
    this.menuService.changeMode(this.menuService.getModes()[index]);  // Assuming changeMode expects a mode object
  }

  getModes():Mode[] {
    return this.menuService.getModes();
  }
}
