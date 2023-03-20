import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})

export class GameComponent {
  constructor(private router: Router) {}
}

