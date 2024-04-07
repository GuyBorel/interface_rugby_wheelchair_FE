import { Component } from '@angular/core';
import RecordRTC from 'recordrtc';
import {NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {AudioService} from "../audio.service";
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-mode-commande-vocale',
  templateUrl: './mode-commande-vocale.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./mode-commande-vocale.component.css']
})
export class ModeCommandeVocaleComponent {
  private recordRTC: any;
  recording = false;
  audioUrl: string = '';
  private mediaStream: MediaStream | null = null;
  private uploadedFile: File | null = null;
  public transcriptionResult: string = '';



  constructor(private cd: ChangeDetectorRef,private audioService: AudioService) { }
  onFileSelected(event: any) {
    const file:File = event.target.files[0];
    if (file) {
      this.audioService.uploadAudio(file).subscribe(response => {
        console.log("Réponse de l'API :", response);
      }, error => {
        console.error("Erreur lors de l'envoi du fichier :", error);
      });
    }
  }

  toggleRecording() {
    if (this.recording) {
      this.stopRecording();
    } else {
      this.startRecording();
    }
  }

  stopRecording() {
    if (this.recordRTC) {
      this.recordRTC.stopRecording(() => {
        let audioBlob = this.recordRTC.getBlob();
        const audioFile = new File([audioBlob], "audio_recording.ogg", { type: "audio/ogg" });
        this.audioUrl = URL.createObjectURL(audioFile);
        this.recording = false;
        this.uploadedFile = audioFile;
        this.cd.detectChanges(); // Force la détection de changement ici

      });
    }
  }






  async startRecording() {
    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.recordRTC = new RecordRTC(this.mediaStream, { type: 'audio' });
      this.recordRTC.startRecording();
      this.recording = true;
    } catch (error) {
      console.error(error);
    }
  }


  uploadAudio(file: File | null) {
    if (!file) {
      console.error("Aucun fichier à téléverser.");
      return;
    }
    this.audioService.uploadAudio(file);
  }
  public get UploadedFile(): File | null {
    return this.uploadedFile;
  }
  downloadRecording() {
    if (this.audioUrl) {
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      a.href = this.audioUrl;
      a.download = 'recording.wav';
      a.click();
      window.URL.revokeObjectURL(this.audioUrl);
      a.remove();
    }
  }

  transcribeAudio() {
    if (!this.uploadedFile) {
      console.error("Aucun fichier audio à transcrire.");
      return;
    }

    this.audioService.uploadAudioForTranscription(this.uploadedFile).subscribe({
      next: (response) => {
        console.log("Transcription:", response.transcription);
        this.transcriptionResult = response.transcription
      },
      error: (err) => {
        console.error("Erreur lors de la transcription:", err);
      }
    });

  }

}

