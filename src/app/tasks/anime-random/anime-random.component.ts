import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnimeRandomService, Data } from 'src/app/service/anime-random.service';

@Component({
  selector: 'app-anime-random',
  templateUrl: './anime-random.component.html',
  styleUrls: ['./anime-random.component.css'],
})
export class AnimeRandomComponent implements OnDestroy {
  showContainer: boolean = false;
  animeData: Data;
  animeSub: Subscription;
  loading: boolean;
  theMessage: string;
  errorMsg: string;

  constructor(private animeRandomService: AnimeRandomService) {}

  onShowAndGenerate() {
    if (!this.showContainer) this.showContainer = true;
    this.loading = true;

    this.animeSub = this.animeRandomService.fetchAnime().subscribe(
      (data) => {
        this.errorMsg = null;
        this.animeData = data;
        this.theMessage = this.animeData.artist;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.errorMsg =
          error.message || 'There is an error please try again later';
        this.theMessage = this.errorMsg;
      }
    );
  }

  ngOnDestroy(): void {
    this.animeSub?.unsubscribe();
  }
}
