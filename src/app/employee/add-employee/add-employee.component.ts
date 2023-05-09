import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  empForm = new FormGroup({
    lastName: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get lastName() {
    return this.empForm.get('lastName');
  }
  get firstName() {
    return this.empForm.get('firstName');
  }
  get address() {
    return this.empForm.get('address');
  }
  get email() {
    return this.empForm.get('email');
  }
  get password() {
    return this.empForm.get('password');
  }
  submitEmployee() {
    console.log(this.empForm.value);
  }
}
