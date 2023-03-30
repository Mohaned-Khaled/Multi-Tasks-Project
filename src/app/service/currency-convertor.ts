import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrenyConvertorService {
  constructor(private http: HttpClient) {}

  getData(specificCur) {
    return this.http
      .get<any>(
        `https://v6.exchangerate-api.com/v6/a5cc5478f047dbebb6e28fbd/latest/${specificCur}`
      )
      .pipe(
        map((data) => {
          return data.conversion_rates;
        })
      );
  }
}
