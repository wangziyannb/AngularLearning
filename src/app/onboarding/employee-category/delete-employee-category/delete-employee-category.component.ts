import { Component } from '@angular/core';
import { EmployeeCategoryService } from 'src/app/shared/services/onboarding/employee-category.service';

@Component({
  selector: 'app-delete-employee-category',
  templateUrl: './delete-employee-category.component.html',
  styleUrls: ['./delete-employee-category.component.css']
})
export class DeleteEmployeeCategoryComponent {
  constructor(private service: EmployeeCategoryService) {

  }
  id: any = 0;
  submit() {
    this.service.delete(this.id).subscribe(resp => {
      window.alert(resp);
    });
  }
}
