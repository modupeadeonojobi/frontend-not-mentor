import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MathValidators } from './../math-validators';
import { delay, filter, scan } from 'rxjs/operators'


@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.scss']
})
export class EquationComponent implements OnInit {

  secondsPerSolution: number;

  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
  },
    [MathValidators.addition('answer', 'a', 'b')]
  );

  constructor() { }

  ngOnInit(): void {
    this.mathForm.statusChanges.pipe(
      filter(value => value === 'VALID'),
      delay(100),
      scan((acc, value) => {
        return {
          numberSolved: acc.numberSolved + 1,
          startTime: acc.startTime
        }
      }, { numberSolved: 0, startTime: new Date() })
    ).subscribe(({ numberSolved, startTime }) => {
      this.secondsPerSolution =
        (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;
      // USE TO SET ALL VALUES;
      this.mathForm.setValue({
        a: this.randomNumber(),
        b: this.randomNumber(),
        answer: ''
      });
      // this.mathForm.patchValue({
      //   a: this.randomNumber(),
      //   answer: this.randomNumber()
      // })
      // TO SET SOME VALUES IN THE FORM
    });
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }

  // USING GETTER METHOD TO GET THE VALUE IN FORMGROUP
  get a() {
    return this.mathForm.controls.a.value;
  }

  get b() {
    return this.mathForm.value.b;
  }

}


