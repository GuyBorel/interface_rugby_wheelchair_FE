import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

interface TranscriptionResponse {
  transcription: string; // Assurez-vous que cela correspond à la clé retournée par votre API Flask
}

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private apiUrl:string = 'http://obvault.duckdns.org:31400'
  constructor(private http: HttpClient) {
  }

  uploadAudio(file: File) {
    const formData = new FormData();
    formData.append('audio', file, file.name);
    return this.http.post(this.apiUrl+'/upload', formData);
  }

  uploadAudioForTranscription(file: File): Observable<TranscriptionResponse> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<TranscriptionResponse>(this.apiUrl+'/transcribe', formData).pipe(
      tap(response => console.log("Réponse de transcription:", response)),
      catchError((error: any) => { // Explicitement typé 'error' comme 'any' ou utilisez un type plus spécifique si possible
        console.error("Erreur lors de la transcription:", error);
        return throwError(() => error);
      })
    );
  }
}
