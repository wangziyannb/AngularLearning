import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/onboarding/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {
  c: any[] = [];
  constructor(private service: EmployeeService) {
    this.service.getAll().subscribe(resp => {
      this.c = this.c.concat(resp);
      console.log(resp);

    });
  }


}
