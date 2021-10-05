import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../environments/environment';
import { catchError, pluck } from 'rxjs/operators';
import { throwError } from 'rxjs';


interface wikipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      padeid: number;
    }[];
  }
}

@Injectable({
  providedIn: 'root'
})

export class WikiService {

  constructor(private http: HttpClient) { }

  search(term: string) {
    const wikiUrl = environment.wikiUrl;
    return this.http.get<wikipediaResponse>(wikiUrl, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    }).pipe(
      pluck('query', 'search'),
      catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message};`
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    return throwError(errorMessage);
  }
}