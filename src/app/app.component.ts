import { Component, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { PianoService } from './core/piano.service';
import { SoundService } from './core/sound.service';
import { PianoNote } from './core/piano-note';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  subscription: Subscription;
  song = ['c', 'f', 'f', 'g', 'e', 'f', 'e', 'd', 'c', 'c', 'd', 'd', 'e', 'c', 'f', 'a', 'g'];
  // song = ['c', 'f', 'f'];
  tune = [];
  bingo = false;

  constructor(
    private pianoService: PianoService,
    private soundService: SoundService) {
      this.subscription = pianoService.notePlayed$.subscribe(note => this.handleNotePlayed(note));
  }

  ngOnInit() {
    this.soundService.initialize();
  }

  handleKeyPlayed(keyId: number) {
    this.pianoService.playNoteByKeyId(keyId);
  }

  handleNotePlayed(note: PianoNote) {
    this.soundService.playNote(note.keyId);
    console.info('note name', note.name);
    console.info('tune:', this.tune);
    if (this.song[this.tune.length] === note.name) {
      this.tune.push(note.name);
    } else {
      this.tune = [];
    }

    if (this.song.length === this.tune.length && this.song.every((v, i) => v === this.tune[i])) {
      console.info('bingo!!!!');
      this.bingo = true;
    }

  }

}
