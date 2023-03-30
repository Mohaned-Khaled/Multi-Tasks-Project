import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

export interface DataAPI {
  artist: string;
  artist_url: string;
  error: string;
  source_url: string;
  url: string;
}

export interface Data {
  artist: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class AnimeRandomService {
  constructor(private http: HttpClient) {}

  fetchAnime() {
    return this.http.get<DataAPI>('https://api.catboys.com/img').pipe(
      map(
        (data) => {
          const newData: Data = { url: data.url, artist: data.artist };
          return data;
        },
        catchError((error) => {
          return throwError(error);
        })
      )
    );
  }
}
