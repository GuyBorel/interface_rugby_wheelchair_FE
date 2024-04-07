import { Component } from '@angular/core';
import {MenuService} from "../menu.service";

@Component({
  selector: 'app-titre',
  standalone: true,
  imports: [],
  templateUrl: './titre.component.html',
  styleUrl: './titre.component.css'
})
export class TitreComponent {
  mode:string;
  title:string;
  statutConnexion:string;
  service : MenuService;
  constructor(service:MenuService) {
    this.mode = "Mode Selection"
    this.title = "Mode "
    this.service = service;
    this.statutConnexion = "Connecté";
  }


}
