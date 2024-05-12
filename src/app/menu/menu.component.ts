import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MenuService, Mode } from "../menu.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgForOf, NgIf, AsyncPipe],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  title = 'Menu de sélection du mode';
  private modesSubscription!: Subscription;
  modes$: Observable<Mode[]>;

  constructor(private menuService: MenuService) {
    this.modes$ = this.menuService.modes$; // Assign here for use with async pipe
  }

  ngOnInit(): void {
    // Fetch available modes on initialization
    this.menuService.fetchAvailableModes();
  }

  setModeActive(mode: Mode): void {
    this.menuService.changeMode(mode);
  }

  ngOnDestroy(): void {
    if (this.modesSubscription) {
      this.modesSubscription.unsubscribe();
    }
  }
}
