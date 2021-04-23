import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.css']
})
export class ChildParentComponent implements OnInit {
  @Input() title!: string;
  @Input() username!: string ;
  @Input() name!: string;
  
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
