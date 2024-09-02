import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {Match} from "../models/match.model";
import { Championship } from '../models/championship.model'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private apiUrl = 'http://192.168.1.69:5000'; // URL de ton backend Flask

  constructor(private http: HttpClient) {}

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

  // Method to fetch all championships
  getChampionships(): Observable<Championship[]> {
    return this.http.get<Championship[]>(`${this.apiUrl}/championships`)
      .pipe(
        tap(data => console.log('Fetched Championships:', data))  // Log the fetched data
      );
  }
  // Méthode pour ajouter un match
  addMatch(matchData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add_match`, matchData);
  }

// Method in DatabaseService
  getMatches(championshipId: number): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.apiUrl}/championships/${championshipId}/matches`);
  }

  // Method to get all matches
  getAllMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.apiUrl}/matches`);
  }





}

