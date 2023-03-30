import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-ui',
  templateUrl: './feedback-ui.component.html',
  styleUrls: ['./feedback-ui.component.css'],
})
export class FeedbackUiComponent implements OnInit {
  clickedEmoji: string;
  isReviewed: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onChange(props: string) {
    this.clickedEmoji = props;
  }

  onReview() {
    if (!this.clickedEmoji) return;
    this.isReviewed = true;
  }
}
