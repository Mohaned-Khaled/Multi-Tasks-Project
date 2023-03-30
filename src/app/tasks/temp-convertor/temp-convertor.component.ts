import { Component } from '@angular/core';

@Component({
  selector: 'app-temp-convertor',
  templateUrl: './temp-convertor.component.html',
  styleUrls: ['./temp-convertor.component.css'],
})
export class TempConvertorComponent {
  cValue: string;
  kValue: string;
  fValue: string;

  getTemp(event: Event) {
    const inputElement = <HTMLInputElement>event.target;
    const currentValue = inputElement.value;

    switch (inputElement.name) {
      case 'celsius':
        this.kValue = (+currentValue + 273.32).toFixed(2);
        this.fValue = (+currentValue * 1.8 + 32).toFixed(2);
        break;
      case 'farhenheit':
        this.cValue = ((+currentValue - 32) / 1.8).toFixed(2);
        this.kValue = ((+currentValue - 32) / 1.8 + 273.32).toFixed(2);
        break;
      case 'kelvin':
        this.cValue = (+currentValue - 273.32).toFixed(2);
        this.fValue = ((+currentValue - 273.32) * 1.8 + 32).toFixed(2);
        break;
      default:
        break;
    }
  }
}
