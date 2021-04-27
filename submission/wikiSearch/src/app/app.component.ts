import { WikiService } from './wiki.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pages = [];

  constructor(private wikipedia: WikiService) { }

  ngOnInit(): void { }

  onTerm(term: string) {
    this.wikipedia.search(term)
      .subscribe(pages => {
        this.pages = pages;
      })
  }

}
