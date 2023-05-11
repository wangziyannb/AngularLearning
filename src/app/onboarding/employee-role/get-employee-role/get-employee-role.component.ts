import { Component } from '@angular/core';
import { EmployeeRoleService } from 'src/app/shared/services/onboarding/employee-role.service';

@Component({
  selector: 'app-get-employee-role',
  templateUrl: './get-employee-role.component.html',
  styleUrls: ['./get-employee-role.component.css']
})
export class GetEmployeeRoleComponent {
  constructor(private service: EmployeeRoleService) {

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
