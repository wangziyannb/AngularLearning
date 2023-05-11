import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/services/onboarding/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor(private service: EmployeeService) {

  }
  myForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    middlename: new FormControl('', [Validators.required]),
    ssn: new FormControl('', [Validators.required]),
    hireDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    employeeCategoryCode: new FormControl('', [Validators.required]),
    employeeStatusCode: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    employeeRoleId: new FormControl('', [Validators.required]),
  });

  submit() {
    this.service.create(this.myForm.value).subscribe(data => {
      window.alert(data);
    });
  }
}
