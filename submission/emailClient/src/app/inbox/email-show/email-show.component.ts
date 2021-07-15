import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { EmailService } from './../email.service';
import { Email } from '../email';


@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {

  email: Email;

  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ) { }

  ngOnInit(): void {

    /**
    *
    *
    * @memberof EmailShowComponent
      Observable is best used for rounting within a component
      i.e using id or another identifier.
      It emit a value immediately some specific part of the url changes.
      this.route.params.subscribe((snapshot) => {
      console.log(snapshot.id)
    })
      Or
      Snapshot is best use for component bacause component don't get created again,
      i.e to rount from one component to another.
      USING SNAPSHOT TO GET ACCESS TO THE ID
      console.log(this.route.snapshot.params.id)
    
    */

    /**
     *
     *
     * @memberof EmailShowComponent
     *  Nasty way without using observable
     * 
     * this.route.params.subscribe(({ id}) => {
     * this.emailService.getEmail(id).subscribe(email => {
     * console.log(email);
     * });
     * });
     *
     */


    this.route.params.pipe(
      switchMap(({ id }) => {
        // id.id. switchMap makes a request using id; It can canceal and make new request on rapide change.
        return this.emailService.getEmail(id);
      })
    ).subscribe((email) => {
      this.email = email;
    })
  }

}
