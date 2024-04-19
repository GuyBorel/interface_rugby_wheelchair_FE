import {Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {MenuService} from "../menu.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'] // Corrigé à styleUrls
})
export class MenuComponent implements OnDestroy {
  title = 'Menu de sélection du mode';
  modes: { label: string; active: boolean; }[] = [];
  private modesSubscription: Subscription;

  constructor(private menuService: MenuService) {
    // S'abonne aux changements des modes et met à jour l'UI de manière réactive
    this.modesSubscription = this.menuService.modes$.subscribe(modes => {
      this.modes = modes;
    });
  }

  setMode(i: number) {
    this.menuService.setModeActive(i);
  }

  ngOnDestroy() {
    // Désabonnement pour éviter les fuites de mémoire
    this.modesSubscription.unsubscribe();
  }
}
