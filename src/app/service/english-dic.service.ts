import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EnglishDicService {
  constructor(private http: HttpClient) {}

  fetchDictionary(searchQuery: string) {
    return this.http
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`)
      .pipe(
        map((data) => {
          console.log(data);
          const targetedValues = {
            phonetics: data[0].phonetics[0].audio,
            meaning: data[0].meanings[0].definitions[0].definition,
          };

          return targetedValues;
        }),
        catchError((error) => {
          return throwError(error.error.title);
        })
      );
  }
}
