import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    return this.http.post<AuthResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDEFeLXa6-5IjVv_3_N6zsv4OWHtJugeDA',
      { email, password, returnSecureToken: true }
    );
  }
}
