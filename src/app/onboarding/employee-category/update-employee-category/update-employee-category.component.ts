import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeCategoryService } from 'src/app/shared/services/onboarding/employee-category.service';

@Component({
  selector: 'app-update-employee-category',
  templateUrl: './update-employee-category.component.html',
  styleUrls: ['./update-employee-category.component.css']
})
export class UpdateEmployeeCategoryComponent {
  constructor(private service: EmployeeCategoryService) {

  }
  myForm = new FormGroup({
    lookupCode: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  submit() {
    this.service.update(this.myForm.value).subscribe(data => {
      window.alert(data);
    });
  }
}
