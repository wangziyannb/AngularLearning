import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeStatusService } from 'src/app/shared/services/onboarding/employee-status.service';

@Component({
  selector: 'app-add-employee-status',
  templateUrl: './add-employee-status.component.html',
  styleUrls: ['./add-employee-status.component.css']
})
export class AddEmployeeStatusComponent {
  constructor(private service: EmployeeStatusService) {

  }
  myForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    abbr: new FormControl('', [Validators.required]),
  });

  submit() {
    this.service.create(this.myForm.value).subscribe(data => {
      window.alert(data);
    });
  }
}
