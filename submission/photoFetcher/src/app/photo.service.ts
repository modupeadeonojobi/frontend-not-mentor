import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { pluck } from 'rxjs/operators';

interface photoResponse {
  urls: {
    regular: string;
  };
}


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhotos() {
    const splashUrl = environment.serve_url + 'random';
    return this.http.get<photoResponse>(splashUrl, {
      headers: {
        Authorization: 'Client-ID qnb-r6ad4nus0I2JpiMnazCqfGYoSXm_ES8BxTitYG0'
      }
    });
  }
}


