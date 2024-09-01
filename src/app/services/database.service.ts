import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private apiUrl = 'http://192.168.1.69:5000'; // URL de ton backend Flask

  constructor(private http: HttpClient) { }

  // Méthode pour ajouter un club
  addClub(clubData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add_club`, clubData);
  }

  // Méthode pour récupérer tous les clubs
  getClubs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/clubs`);
  }

  // Méthode pour ajouter un joueur
  addPlayer(playerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add_player`, playerData);
  }

  // Méthode pour récupérer les joueurs d'un club spécifique
  getPlayers(clubId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/clubs/${clubId}/players`);
  }

  // Méthode pour ajouter un championnat
  addChampionship(championshipData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add_championship`, championshipData);
  }

  // Méthode pour récupérer tous les championnats
  getChampionships(): Observable<any> {
    return this.http.get(`${this.apiUrl}/championships`);
  }

  // Méthode pour ajouter un match
  addMatch(matchData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add_match`, matchData);
  }

  // Méthode pour récupérer les matchs d'un championnat spécifique
  getMatches(championshipId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/championships/${championshipId}/matches`);
  }
}
