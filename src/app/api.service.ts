import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiKey } from './apiKey';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  getImageOfMovie(movieId: number): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=fr`
    );
  }

  getAudioOfMovie(movieIdDeez: number): Observable<any> {
    return this.http.get<any>(
      `https://afternoon-castle-83817.herokuapp.com/https://api.deezer.com/track/${movieIdDeez}`
    );
  }
}
