export interface Championship {
  id: number;
  year: number;
  division: string;
  champion_club_id?: number; // Optional if it might not be present
}
