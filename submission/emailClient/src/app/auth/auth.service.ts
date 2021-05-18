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

  rootUrl = 'https://api.angular-email.com';
  loggedin$ = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string) {
    return this.http.post<usernameResponse>(
      `${this.rootUrl}/auth/username`, { username }
    );
  }

  signup(credentials: SignupCredentials) {
    return this.http.post<SignupResponse>(`${this.rootUrl}/auth/signup`, credentials)
      .pipe(
        tap(() => {
          this.loggedin$.next(true);
        })
      );
  }

  checkAuth() {
    return this.http.get<LogggedinResponse>(`${this.rootUrl}/auth/signedin`)
      .pipe(
        tap(({ authenticated }) => {
          this.loggedin$.next(authenticated);
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
    return this.http.post(`${this.rootUrl}/auth/signin`, credentials).pipe(
      tap(() => {
        this.loggedin$.next(true);
      })
    )
  }
}
