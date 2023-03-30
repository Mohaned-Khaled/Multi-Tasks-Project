import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CurrenyConvertorService } from 'src/app/service/currency-convertor';

@Component({
  selector: 'app-currency-convertor',
  templateUrl: './currency-convertor.component.html',
  styleUrls: ['./currency-convertor.component.css'],
})
export class CurrencyConvertorComponent implements OnInit {
  @ViewChild('firstCur') firstCur: ElementRef;
  @ViewChild('secondRef') secondRef: ElementRef;
  myInput: string = '1';
  myCalc: number;
  myDesc: string;

  constructor(private currenyConvertorService: CurrenyConvertorService) {}

  ngOnInit(): void {
    this.updateRate();
  }

  updateRate() {
    const firstCur = this.firstCur?.nativeElement.value || 'USD';
    const secondCur = this.secondRef?.nativeElement.value || 'EGP';

    this.currenyConvertorService.getData(firstCur).subscribe((data) => {
      const convertion = data[secondCur];

      if (+this.myInput === 0) this.myCalc = 0;
      this.myCalc = Number((+this.myInput * convertion).toFixed(2));

      this.myDesc = `1 ${firstCur} = ${convertion} ${secondCur}`;
    });
  }
}
