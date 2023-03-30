import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeRandomComponent } from './tasks/anime-random/anime-random.component';
import { BmiCalulatorComponent } from './tasks/bmi-calulator/bmi-calulator.component';
import { CurrencyConvertorComponent } from './tasks/currency-convertor/currency-convertor.component';
import { EnglishDictionaryComponent } from './tasks/english-dictionary/english-dictionary.component';
import { FeedbackUiComponent } from './tasks/feedback-ui/feedback-ui.component';
import { LoanCalculatorComponent } from './tasks/loan-calculator/loan-calculator.component';
import { NotesComponent } from './tasks/notes/notes.component';
import { RandomEmojiComponent } from './tasks/random-emoji/random-emoji.component';
import { TempConvertorComponent } from './tasks/temp-convertor/temp-convertor.component';
import { WeightConvertorComponent } from './tasks/weight-convertor/weight-convertor.component';

const routes: Routes = [
  { path: '', redirectTo: 'project/1', pathMatch: 'full' },
  { path: 'project/1', component: FeedbackUiComponent },
  { path: 'project/2', component: EnglishDictionaryComponent },
  { path: 'project/3', component: AnimeRandomComponent },
  { path: 'project/4', component: RandomEmojiComponent },
  { path: 'project/5', component: TempConvertorComponent },
  { path: 'project/6', component: BmiCalulatorComponent },
  { path: 'project/7', component: NotesComponent },
  { path: 'project/8', component: CurrencyConvertorComponent },
  { path: 'project/9', component: LoanCalculatorComponent },
  { path: 'project/10', component: WeightConvertorComponent },
  { path: '**', redirectTo: 'project/1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
