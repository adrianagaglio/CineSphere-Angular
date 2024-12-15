import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { iAuth } from '../../interfaces/iauth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  message: string = '';
  isSuccess: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.email, Validators.required]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  ngAfterViewInit() {
    this.loginForm.get('password')?.setErrors({
      required: true,
      message: 'Password is required',
    });
  }

  isInvalidTouched(fieldName: string) {
    return (
      this.loginForm.get(fieldName)?.invalid &&
      this.loginForm.get(fieldName)?.touched
    );
  }

  login() {
    if (this.loginForm.valid) {
      this.authSvc.login(this.loginForm.value).subscribe({
        next: (result: iAuth) => {
          this.isSuccess = true;
          this.message = 'Logged in successfully';
        },
        error: (error: string) => {
          this.isSuccess = false;
          this.message = error;
        },
      });
    }
  }
}
