import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeCategoryService } from 'src/app/shared/services/onboarding/employee-category.service';

@Component({
  selector: 'app-add-employee-category',
  templateUrl: './add-employee-category.component.html',
  styleUrls: ['./add-employee-category.component.css']
})
export class AddEmployeeCategoryComponent {
  constructor(private service: EmployeeCategoryService) {

  }
  myForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
  });

  submit() {
    this.service.create(this.myForm.value).subscribe(data => {
      window.alert(data);
    });
  }
}
