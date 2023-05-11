import { Component } from '@angular/core';
import { EmployeeRoleService } from 'src/app/shared/services/onboarding/employee-role.service';

@Component({
  selector: 'app-list-employee-role',
  templateUrl: './list-employee-role.component.html',
  styleUrls: ['./list-employee-role.component.css']
})
export class ListEmployeeRoleComponent {
  c: any[] = [];
  constructor(private service: EmployeeRoleService) {
    this.service.getAll().subscribe(resp => {
      this.c = this.c.concat(resp);
      console.log(resp);

    });
  }
}
