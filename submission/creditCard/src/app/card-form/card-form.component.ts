import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  cardForm!: FormGroup;
  // ******************* ANOTHER WAY OF DOING IT ***************************************
  // cardForm = new FormGroup({
  //   name: new FormControl('', [Validators.required])
  // })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]
        // Validators.minLength(3)
      ]
    });
  }



}
