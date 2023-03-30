import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EnglishDicService } from 'src/app/service/english-dic.service';

@Component({
  selector: 'app-english-dictionary',
  templateUrl: './english-dictionary.component.html',
  styleUrls: ['./english-dictionary.component.css'],
})
export class EnglishDictionaryComponent implements OnInit {
  searchWord: string;
  isLoading: boolean = false;
  errorMsg: string;

  ourData: { meaning: string; phonetics: string };

  constructor(private englishDic: EnglishDicService) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    if (!f.valid) return;
    this.errorMsg = null;
    this.searchWord = f.value['search'];

    this.isLoading = true;
    this.englishDic.fetchDictionary(this.searchWord).subscribe(
      (data) => {
        this.ourData = data;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.errorMsg = error;
      }
    );

    f.reset();
  }
}
