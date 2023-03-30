import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface EmojiState {
  character: string;
  codePoint: string;
  group: string;
  slug: string;
  subGroup: string;
  unicodeName: string;
}

@Injectable({ providedIn: 'root' })
export class RandomEmojiService {
  constructor(private http: HttpClient) {}

  fetchEmoji() {
    return this.http
      .get<EmojiState[]>('https://emoji-api.com/emojis', {
        params: new HttpParams().append('access_key', environment.EMOJI_API),
      })
      .pipe(
        map((data) => {
          return data.slice(0, 1500);
        })
      );
  }
}
