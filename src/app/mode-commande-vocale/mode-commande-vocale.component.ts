import { Component } from '@angular/core';
import RecordRTC from 'recordrtc';
import {NgIf} from "@angular/common";

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

  constructor() { }

  toggleRecording() {
    if (this.recording) {
      this.stopRecording();
    } else {
      this.startRecording();
    }
  }

  startRecording() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      this.recordRTC = new RecordRTC(stream, { type: 'audio' });
      this.recordRTC.startRecording();
      this.recording = true;
    }).catch(error => console.error(error));
  }

  stopRecording() {
    this.recordRTC.stopRecording(() => {
      let audio = this.recordRTC.getBlob();
      this.audioUrl = URL.createObjectURL(audio);
      this.recording = false;

      // Arrête le flux audio
      this.recordRTC.stream.getTracks().forEach((track: MediaStreamTrack) => track.stop());
    });
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
}

