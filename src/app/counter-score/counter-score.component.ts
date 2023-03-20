import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-score',
  templateUrl: './counter-score.component.html',
  styleUrls: ['./counter-score.component.css'],
})
export class CounterScoreComponent implements OnInit {
  score = 1000;
  intervalId: any;

  @Output() scoreStop = new EventEmitter<number>();

  stopScore(value: number) {
    this.scoreStop.emit(value);
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.score = Math.floor(this.score - 1000 / 30);
      if (this.score <= 13) {
        this.score = 0;
      }
    }, 1000);
  }
}