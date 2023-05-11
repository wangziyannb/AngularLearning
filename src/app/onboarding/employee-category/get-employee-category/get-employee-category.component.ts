import { Component } from '@angular/core';
import { EmployeeCategoryService } from 'src/app/shared/services/onboarding/employee-category.service';

@Component({
  selector: 'app-get-employee-category',
  templateUrl: './get-employee-category.component.html',
  styleUrls: ['./get-employee-category.component.css']
})
export class GetEmployeeCategoryComponent {
  constructor(private service: EmployeeCategoryService) {

  }
  id: any = 0;
  c: any[] = [];
  submit() {
    this.service.get(this.id).subscribe(resp => {
      this.c = this.c.concat(resp);
      console.log(resp);

    });
  }
}
