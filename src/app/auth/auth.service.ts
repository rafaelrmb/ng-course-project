import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY } from './api-key';
import { catchError, throwError } from 'rxjs';

interface AuthResponse {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponse>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        { email, password, returnSecureToken: true }
      )
      .pipe(
        catchError((errorRes) => {
          let errorMsg = 'An error has occurred!';

          if (!errorRes.error || !errorRes.error.error) {
            return throwError(() => new Error(errorMsg));
          }

          return throwError(() => new Error(errorRes.error.error.message));
        })
      );
  }
}
