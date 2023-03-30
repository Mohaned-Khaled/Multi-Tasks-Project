import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.css'],
})
export class LoanCalculatorComponent implements AfterViewInit {
  @ViewChild('loanAmount') loanAmount: ElementRef;
  @ViewChild('interestRate') interestRate: ElementRef;
  @ViewChild('monthsToPay') monthsToPay: ElementRef;
  finalVal: string;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.onCalc();
    this.cdr.detectChanges();
  }

  onCalc() {
    const loanVal = +this.loanAmount?.nativeElement.value;
    const interestVal = +this.interestRate?.nativeElement.value;
    const monthsVal = +this.monthsToPay?.nativeElement.value;

    this.finalVal = (
      (loanVal + (loanVal * interestVal) / 100) /
      monthsVal
    ).toFixed(2);
  }
}
