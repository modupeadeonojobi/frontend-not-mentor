import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { pluck } from 'rxjs/operators';


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
    })
      .pipe(pluck('query', 'search'));
  }
}
