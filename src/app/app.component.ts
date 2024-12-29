import { Component } from '@angular/core';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { MusicComponent } from './music/music.component';

@Component({
  selector: 'app-root',
  imports: [BackgroundImageComponent, MusicComponent],
  template: `
    <app-background-image>
      <app-music></app-music>
    </app-background-image>
    <a href="https://leiriaindustries.com">leiriaIndustries.com</a>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my own sperm dot com';
}
