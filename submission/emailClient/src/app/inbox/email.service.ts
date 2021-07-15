import { Injectable } from '@angular/core';
import { Email, EmailSummary } from './email';
import { HttpClient } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  rootUrl = environment.serverUrl;

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  getEmails() {
    return this.http.get<EmailSummary[]>(`${this.rootUrl}/emails`);
  }

  getEmail(id: string) {
    return this.http.get<Email>(`${this.rootUrl}/emails/${id}`).pipe(
      catchError(() => {
        this.route.navigateByUrl('/inbox/not-found');
        return EMPTY;
      })
    )
  }
}
