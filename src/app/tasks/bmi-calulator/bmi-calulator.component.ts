import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bmi-calulator',
  templateUrl: './bmi-calulator.component.html',
  styleUrls: ['./bmi-calulator.component.css'],
})
export class BmiCalulatorComponent {
  @ViewChild('f') myForm: NgForm;
  bmiValue: number;
  status: string;

  onCompute() {
    const heightValue = +this.myForm.value.height / 100;
    const weightValue = +this.myForm.value.weight;

    this.bmiValue = weightValue / (heightValue * heightValue);

    if (this.bmiValue < 18.5) this.status = 'Under weight';
    else if (this.bmiValue >= 18.5 && this.bmiValue <= 24.9)
      this.status = 'Normal Weight';
    else if (this.bmiValue >= 25 && this.bmiValue <= 29.9)
      this.status = 'Over Weight';
    else this.status = 'Obesity';
  }
}
