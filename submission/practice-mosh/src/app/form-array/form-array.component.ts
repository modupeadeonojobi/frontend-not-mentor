import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  form = new FormGroup({
    topics: new FormArray([])
  });

  // The topics you get below on get topics(): is what you add in 'this.topics.push'
  addTopic(topic: HTMLInputElement): any{
    this.topics.push(new FormControl(topic.value));
    topic.value = ''; // reset the input to empty after clicking enter.
  }

  get topics(): any {
    return this.form.get('topics') as FormArray;
  }

  removeTopic(topic: FormControl): any{
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  constructor() { }

  ngOnInit(): void { }

}
