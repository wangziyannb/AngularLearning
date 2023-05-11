import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeRoleService } from 'src/app/shared/services/onboarding/employee-role.service';

@Component({
  selector: 'app-update-employee-role',
  templateUrl: './update-employee-role.component.html',
  styleUrls: ['./update-employee-role.component.css']
})
export class UpdateEmployeeRoleComponent {
  constructor(private service: EmployeeRoleService) {

  }
  myForm = new FormGroup({
    lookupCode: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    abbr: new FormControl('', [Validators.required]),
  });

  submit() {
    this.service.update(this.myForm.value).subscribe(data => {
      window.alert(data);
    });
  }
}
