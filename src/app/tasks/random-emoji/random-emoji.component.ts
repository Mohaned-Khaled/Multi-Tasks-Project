import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RandomEmojiService } from 'src/app/service/random-emoji.service';

@Component({
  selector: 'app-random-emoji',
  templateUrl: './random-emoji.component.html',
  styleUrls: ['./random-emoji.component.css'],
})
export class RandomEmojiComponent implements OnDestroy {
  emojiData: { emoji: string; title: string };
  emojiSub: Subscription;
  constructor(private randomEmojiService: RandomEmojiService) {}

  onRandom() {
    this.emojiSub = this.randomEmojiService.fetchEmoji().subscribe((data) => {
      const randomNum = Math.floor(Math.random() * data.length);

      this.emojiData = {
        emoji: data[randomNum].character,
        title: data[randomNum].unicodeName,
      };
    });
  }

  ngOnDestroy(): void {
    this.emojiSub?.unsubscribe();
  }
}
