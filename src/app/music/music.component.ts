import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements AfterViewInit {
  ngAfterViewInit() {
    const audio = document.querySelector('audio');
    if (audio) {
      audio.play().catch(error => {
        console.error('Autoplay failed:', error);
      });
    }
  }
}
