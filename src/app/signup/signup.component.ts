import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';

const passwordRepeatCheck: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const passwordRepeat = control.get('confirmPassword');
  return password && passwordRepeat && passwordRepeat.value !== password.value ? { notMatched: true } : null;
};

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private router: Router, private service: AuthenticationService, private builder: FormBuilder) {

  }

  form = this.builder.group({
    lastName: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  }, { validators: passwordRepeatCheck });

  get lastName() {
    return this.form.get('lastName');
  }
  get firstName() {
    return this.form.get('firstName');
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  submitNewUser() {
    this.service.signUp(this.form.value).subscribe(resp => {
      this.router.navigateByUrl('/');
    });
  }
}
