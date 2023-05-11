import { Component } from '@angular/core';
import { EmployeeCategoryService } from 'src/app/shared/services/onboarding/employee-category.service';

@Component({
  selector: 'app-list-employee-category',
  templateUrl: './list-employee-category.component.html',
  styleUrls: ['./list-employee-category.component.css']
})
export class ListEmployeeCategoryComponent {
  c: any[] = [];
  constructor(private service: EmployeeCategoryService) {
    this.service.getAll().subscribe(resp => {
      this.c = this.c.concat(resp);
      console.log(resp);

    });
  }
}
