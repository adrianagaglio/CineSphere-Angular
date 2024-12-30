import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { last } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm!: FormGroup;
  message: string = '';
  isSuccess: boolean = false;

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: this.fb.control('', [Validators.required]),
      lastName: this.fb.control('', [Validators.required]),
      username: this.fb.control('', [this.minLenght8]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [this.minLenght8]),
    });
  }

  ngAfterViewInit() {}

  isInvalidTouched(fieldname: string) {
    return (
      this.registerForm.get(fieldname)?.invalid &&
      this.registerForm.get(fieldname)?.touched
    );
  }

  minLenght8 = (formC: AbstractControl): ValidationErrors | null => {
    if (formC.value.length < 8) {
      formC.setErrors({
        minLenght8: true,
        message: 'Min 8 characters required',
      });
      return formC.errors;
    }
    return null;
  };

  register() {
    if (this.registerForm.valid) {
      this.authSvc.register(this.registerForm.value).subscribe({
        next: (res) => {
          this.isSuccess = true;
          this.message = 'Registered successfully';
        },
        error: (err) => {
          this.isSuccess = false;
          this.message = err;
        },
      });
    }
  }
}
