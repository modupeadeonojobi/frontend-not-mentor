import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';


interface usernameResponse {
  available: boolean;
}

interface signupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface signupResponse {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string) {
    return this.http.post<usernameResponse>(`${this.rootUrl}/auth/username`, {
      username
    });
  }

  signup(credentials: signupCredentials) {
    return this.http.post<signupResponse>(`${this.rootUrl}/auth/signup`, credentials);
  }
}
