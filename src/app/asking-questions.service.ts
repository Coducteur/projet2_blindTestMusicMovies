import { Injectable } from '@angular/core';
import { EasyMoviesMusics } from 'src/Data/data';
import { mediumMoviesMusics } from 'src/Data/dataMedium';
import { HardMoviesMusics } from 'src/Data/dataHard';

@Injectable({
  providedIn: 'root',
})
export class AskingQuestionsService {
  difficulty: number = 0;

  array = [];

  constructor() {}

  returnDifficulty(): any {
    if (this.difficulty === 1) {
      return EasyMoviesMusics;
    } else if (this.difficulty === 2) {
      return mediumMoviesMusics;
    } else if (this.difficulty === 3) {
      return HardMoviesMusics;
    }
  }

  buttonClicked() {
    return this.difficulty;
  }

  getDifficulty(choice: number) {
    this.difficulty = choice;
  }
}
