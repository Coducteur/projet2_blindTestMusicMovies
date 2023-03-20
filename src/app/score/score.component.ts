import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent {
  score: number = 0;
  questionNumberFromAppQuestion: number = 0;

  @Input() scoreSendToCpnScore!: number;
  @Input() questionSendToCpnScore!: number;

  @Output() ScoreFinalToDisplay: EventEmitter<number> =
    new EventEmitter<number>();

  ngOnChanges() {
    this.questionNumberFromAppQuestion = this.questionSendToCpnScore;
    this.score += this.scoreSendToCpnScore * 33;
    this.scoreFinalToSend();
  }

  scoreFinalToSend(): void {
    this.ScoreFinalToDisplay.emit(this.score);
  }
}
