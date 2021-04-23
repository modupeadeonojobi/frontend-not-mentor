import { combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-githubfollowers',
  templateUrl: './githubfollowers.component.html',
  styleUrls: ['./githubfollowers.component.css']
})
export class GithubfollowersComponent implements OnInit {

  follower: any = { id: 2344 };
  followers: any = { username: 'john' };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // JOIN MULTIPLE OBSERVABLES AND CALL THE SERVER
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .subscribe(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');

        // USING THE SERVICE TO GET INFO FROM SERVER
        // this.service.getAll({id: id, page: page});

      });
  }

}
