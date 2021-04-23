import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'practice-mosh';
  name = 'Joe';
  // username = 'hello';

  // PARENT CHILD COMMUNICATION
  posts = [
    { 
      title: 'Mountain Climbing', 
      username: 'nature climber' 
    },
    { 
      title: 'Hiking', 
      username: 'hiking mountaineers' 
    },
    { 
      title: 'Biking', 
      username: 'go biking' 
    }
  ];

  constructor() {};
}
