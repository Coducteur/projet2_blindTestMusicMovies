import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AskingQuestionsService } from '../asking-questions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  choice: number = 0;

  constructor(
    private router: Router,
    public difficultyService: AskingQuestionsService
  ) {}

  easyClic(): void {
    this.choice = 1;
    this.difficultyService.getDifficulty(this.choice);
  }

  mediumClic(): void {
    this.choice = 2;
    this.difficultyService.getDifficulty(this.choice);
  }
  hardClic(): void {
    this.choice = 3;
    this.difficultyService.getDifficulty(this.choice);
  }
}
