import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeStatusService } from 'src/app/shared/services/onboarding/employee-status.service';

@Component({
  selector: 'app-update-employee-status',
  templateUrl: './update-employee-status.component.html',
  styleUrls: ['./update-employee-status.component.css']
})
export class UpdateEmployeeStatusComponent {
  constructor(private service: EmployeeStatusService) {

  }
  myForm = new FormGroup({
    lookupCode: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    abbr: new FormControl('', [Validators.required]),
  });

  submit() {
    this.service.create(this.myForm.value).subscribe(data => {
      window.alert(data);
    });
  }
}
