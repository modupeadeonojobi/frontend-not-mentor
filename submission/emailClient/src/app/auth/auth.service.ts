import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';


interface usernameResponse {
  available: boolean;
}

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupResponse {
  username: string;
}

interface SigninResponse {
  username: string;
}

interface LogggedinResponse {
  authenticated: boolean;
  username: string;
}

interface LoginCredentials {
  username: string;
  password: string;
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl = environment.serverUrl;
  loggedin$ = new BehaviorSubject(null);
  username = '';

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string) {
    return this.http.post<usernameResponse>(
      `${this.rootUrl}/auth/username`, { username }
    );
  }

  signup(credentials: SignupCredentials) {
    return this.http.post<SignupResponse>(`${this.rootUrl}/auth/signup`, credentials)
      .pipe(
        tap(({ username }) => {
          this.loggedin$.next(true);
          this.username = username;
        })
      );
  }

  checkAuth() {
    return this.http.get<LogggedinResponse>(`${this.rootUrl}/auth/signedin`)
      .pipe(
        tap(({ authenticated, username }) => {
          this.loggedin$.next(authenticated);
          this.username = username;
        })
      )
  }

  logout() {
    return this.http.post(`${this.rootUrl}/auth/signout`, {}).pipe(
      tap(() => {
        this.loggedin$.next(false);
      })
    );
  }

  login(credentials: LoginCredentials) {
    return this.http.post<SigninResponse>(`${this.rootUrl}/auth/signin`, credentials).pipe(
      tap(({ username }) => {
        this.loggedin$.next(true);
        this.username = username;
      })
    )
  }
}
