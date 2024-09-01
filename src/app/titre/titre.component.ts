import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MenuService, Mode } from '../services/menu.service';
import { AsyncPipe, JsonPipe, NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-titre',
  standalone: true,
  imports: [NgIf, NgOptimizedImage, AsyncPipe, JsonPipe],
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.css'],
})
export class TitreComponent implements OnInit, OnDestroy {
  isConnected: boolean | undefined;
  menu: MenuService;
  currentMode$: Observable<Mode>;
  modes$: Observable<Mode[]>;

  constructor(
    private menuService: MenuService,
  ) {
    this.menu = menuService;
    this.modes$ = this.menuService.modes$;
    this.currentMode$ = this.menuService.getSelectedMode();
  }

  getSelectedMode() {
    return this.currentMode$;
  }

  ngOnDestroy() {
  }

  ngOnInit(): void {
    this.menuService.fetchAvailableModes();
  }
}
