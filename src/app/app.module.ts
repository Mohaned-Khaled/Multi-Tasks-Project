import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackUiComponent } from './tasks/feedback-ui/feedback-ui.component';
import { HeaderComponent } from './header/header.component';
import { EnglishDictionaryComponent } from './tasks/english-dictionary/english-dictionary.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AnimeRandomComponent } from './tasks/anime-random/anime-random.component';
import { RandomEmojiComponent } from './tasks/random-emoji/random-emoji.component';
import { TempConvertorComponent } from './tasks/temp-convertor/temp-convertor.component';
import { BmiCalulatorComponent } from './tasks/bmi-calulator/bmi-calulator.component';
import { NotesComponent } from './tasks/notes/notes.component';
import { CurrencyConvertorComponent } from './tasks/currency-convertor/currency-convertor.component';
import { LoanCalculatorComponent } from './tasks/loan-calculator/loan-calculator.component';
import { WeightConvertorComponent } from './tasks/weight-convertor/weight-convertor.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackUiComponent,
    HeaderComponent,
    EnglishDictionaryComponent,
    AnimeRandomComponent,
    RandomEmojiComponent,
    TempConvertorComponent,
    BmiCalulatorComponent,
    NotesComponent,
    CurrencyConvertorComponent,
    LoanCalculatorComponent,
    WeightConvertorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
