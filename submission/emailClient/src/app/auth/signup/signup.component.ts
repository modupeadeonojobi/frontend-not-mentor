import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from './../validators/match-password';
import { UniqueUsername } from './../validators/unique-username';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ], [this.uniqueusername.validate]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
    passwordConfirm: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  }, { validators: [this.matchpassword.validate] });

  constructor(
    private matchpassword: MatchPassword,
    private uniqueusername: UniqueUsername
  ) { }

  ngOnInit(): void {
  }

  authFormErrors() {
    const { dirty, touched, errors } = this.authForm;
    return dirty && touched && errors;
  }

  onSumbit() {
    if (this.authForm.invalid) {
      return;
    }

    console.log(this.authForm.valid)
  }

}
