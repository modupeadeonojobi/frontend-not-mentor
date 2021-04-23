import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  form = new FormGroup ({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace,
      UsernameValidators.shouldBeUnique
    ]),
    password: new FormControl('', Validators.required)
  });

  get username(): any {
    return this.form.get('username');
  }

  login(): any{
    this.form.setErrors({
      invalidLogin: true
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
