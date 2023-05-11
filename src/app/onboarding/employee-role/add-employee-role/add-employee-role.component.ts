import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeRoleService } from 'src/app/shared/services/onboarding/employee-role.service';

@Component({
  selector: 'app-add-employee-role',
  templateUrl: './add-employee-role.component.html',
  styleUrls: ['./add-employee-role.component.css']
})
export class AddEmployeeRoleComponent {
  constructor(private service: EmployeeRoleService) {

  }
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    abbr: new FormControl('', [Validators.required]),
  });

  submit() {
    this.service.create(this.myForm.value).subscribe(data => {
      window.alert(data);
    });
  }
}
