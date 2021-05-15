import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedin$: BehaviorSubject<boolean>

  constructor(private authServiec: AuthService) {
    this.loggedin$ = this.authServiec.loggedin$;
  }

  // loggedin = false;
  // ngOnInit(): void {
  //   this.authServiec.loggedin$.subscribe(loggedin => {
  //     this.loggedin = loggedin;
  //   })
  // }

  ngOnInit(): void {
    this.authServiec.checkAuth().subscribe(() => { });
  }
}
