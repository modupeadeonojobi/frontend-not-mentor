import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from './../validators/match-password';
import { UniqueUsername } from './../validators/unique-username';
import { AuthService } from './../auth.service';



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
    private uniqueusername: UniqueUsername,
    private authService: AuthService
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

    this.authService.signup(this.authForm.value)
      .subscribe({
        next: () => {

        },
        error: (err) => {
          if (!err.status) {
            this.authForm.setErrors({ noConnection: true });
          } else {
            this.authForm.setErrors({ unKnownError: true });
          }
        }
      });
  }

}
