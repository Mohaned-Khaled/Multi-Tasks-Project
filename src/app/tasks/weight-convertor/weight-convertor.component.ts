import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-weight-convertor',
  templateUrl: './weight-convertor.component.html',
  styleUrls: ['./weight-convertor.component.css'],
})
export class WeightConvertorComponent implements OnDestroy {
  inputVal: string;
  result: string;
  errorMsg: string;
  errorTimer: any;
  valueTimer: any;

  onUpdateResult() {
    this.errorMsg = null;
    if (this.errorTimer) clearTimeout(this.errorTimer);
    if (this.valueTimer) clearTimeout(this.valueTimer);

    if (+this.inputVal <= 0 || this.inputVal === null) {
      this.errorMsg = 'Please enter a valid number';
      this.result = '';
      this.errorTimer = setTimeout(() => {
        this.errorMsg = null;
        this.inputVal = '';
      }, 4000);
    } else {
      this.result = (+this.inputVal / 2.2).toFixed(2);

      this.valueTimer = setTimeout(() => {
        this.inputVal = '';
        this.result = '';
      }, 5000);
    }
  }

  ngOnDestroy(): void {}
}
