import { AuthResponse, AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = false;
  authForm!: FormGroup;
  isLoading = false;
  error!: any;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: [''],
    });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    this.isLoading = true;

    if (this.authForm.invalid) {
      return;
    }

    let authObservable: Observable<AuthResponse>;

    const { email, password } = this.authForm.value;

    if (this.isLoginMode) {
      authObservable = this.authService.login(email, password);
    } else {
      authObservable = this.authService.signUp(email, password);
    }

    authObservable.subscribe({
      next: (responseData) => {
        console.log(responseData);
        this.isLoading = false;
      },
      error: (error) => {
        this.error = error;
        this.isLoading = false;
      },
    });

    this.authForm.reset();
  }
}
