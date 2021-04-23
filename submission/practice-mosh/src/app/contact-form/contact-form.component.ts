import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'phone'},
    {id: 3, name: 'Address'}
  ];
  log(x: any): void{
    console.log(x);
  }

  submit(f: any): void {
    console.log(f);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
