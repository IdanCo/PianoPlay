import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { IPianoKey } from './ipiano-key';
import { QuizResult }  from '../core/quiz-result';
import { QuizService } from '../core/quiz.service';

@Component({
  selector: 'keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  @Output() keyPlayed = new EventEmitter<number>()

  private pianoKeys: IPianoKey[];
  private highlightedKeyId: number = 0;

  constructor(private quizService: QuizService) {

    quizService.quizResult$.subscribe(result => this.handleQuizResult(result));

    this.pianoKeys = [
      {whiteKeyId: 40, name: 1} ,
      {whiteKeyId: 42, name: 2, blackKeyId: 41},
      {whiteKeyId: 44, name: 3, blackKeyId: 43},
      {whiteKeyId: 45, name: 4},
      {whiteKeyId: 47, name: 5, blackKeyId: 46},
      {whiteKeyId: 49, name: 6, blackKeyId: 48},
      {whiteKeyId: 51, name: 7, blackKeyId: 50},
    ];
  }

  ngOnInit() {
  }

  keyPress(keyNumber: number) {
    this.keyPlayed.emit(keyNumber);
  }

  handleQuizResult(result: QuizResult) {
    console.log("handleQuizResult: " + result);
    if(result.selectedKeyId != result.actualNote.keyId) {

      this.highlightedKeyId = result.actualNote.keyId;
      setTimeout(() => this.highlightedKeyId=0,1000);

    }
  }

  getColor(keyId) {
    if(keyId == this.highlightedKeyId){
      return "#f0e68c";
    }
    else {
      return "";
    }
  }

}
