import { Component } from '@angular/core';
import { AskingQuestionsService } from '../asking-questions.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css'],
})
export class LevelsComponent {
  difficulty = 0;

  constructor(public askingQuestionsService: AskingQuestionsService) {}

  ngOnInit() {
    this.difficulty = this.askingQuestionsService.buttonClicked();
  }
}
