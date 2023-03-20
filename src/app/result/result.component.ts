import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { AskingQuestionsService } from '../asking-questions.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  moviesToDisplay: any[] = [];
  musicBG: string = '../../assets/ambianceFin.mp3';
  @Input() finalScoreToDisplay: number = 0;

  public imgOfMovie!: {
    id: number;
    budget: number;
    overview: string;
    poster_path: string;
    popularity: number;
  };

  public audioOfMovie!: {
    id: number;
    title: string;
    link: string;
    preview: string;
    artist: { name: string };
  };

  constructor(
    public askingQuestionsService: AskingQuestionsService,
    public apiService: ApiService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.moviesToDisplay = this.askingQuestionsService.returnDifficulty();
  }

  getMovieData(movieId: number) {
    this.apiService
      .getImageOfMovie(movieId)
      .subscribe(
        (resultFromDbmoviesAPI) => (this.imgOfMovie = resultFromDbmoviesAPI)
      );
  }

  getMusicData(movieIdDeez: number) {
    this.apiService
      .getAudioOfMovie(movieIdDeez)
      .subscribe(
        (resultFromDeezerAPI) => (this.audioOfMovie = resultFromDeezerAPI)
      );
  }

  stopMusicBG() {
    this.musicBG = '';
  }
  playMusicBG() {
    this.musicBG = '../../assets/ambianceFin.mp3';
  }
}
