import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-githubfollowersprofile',
  templateUrl: './githubfollowersprofile.component.html',
  styleUrls: ['./githubfollowersprofile.component.css']
})
export class GithubfollowersprofileComponent implements OnInit {
  sub: any;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.router.paramMap
      .subscribe(params => {
        let id = params.get('id');
        console.log(id);
      })
  }

}
