import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equalizer',
  templateUrl: './equalizer.component.html',
  styleUrls: ['./equalizer.component.css'],
})
export class EqualizerComponent implements OnInit {
  bars = new Array(4);
  bars1 = new Array(1);
  bars2 = new Array(4);
  bars3 = new Array(4);
  bars4 = new Array(4);
  bars5 = new Array(4);
  bars6 = new Array(4);

  ngOnInit() {
    setInterval(() => {
      this.randomNumber();
      for (let index = 0; index < this.bars.length; index++) {
        this.bars = new Array(this.randomNumber());
        this.bars1 = new Array(this.randomNumber());
        this.bars2 = new Array(this.randomNumber());
        this.bars3 = new Array(this.randomNumber());
        this.bars4 = new Array(this.randomNumber());
        this.bars5 = new Array(this.randomNumber());
        this.bars6 = new Array(this.randomNumber());
      }
    }, 100);
  }
  randomNumber() {
    return Math.floor(Math.random() * 10) + 2;
  }
}
