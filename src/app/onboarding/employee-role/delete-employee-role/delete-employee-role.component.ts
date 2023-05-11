import { Component } from '@angular/core';
import { EmployeeRoleService } from 'src/app/shared/services/onboarding/employee-role.service';

@Component({
  selector: 'app-delete-employee-role',
  templateUrl: './delete-employee-role.component.html',
  styleUrls: ['./delete-employee-role.component.css']
})
export class DeleteEmployeeRoleComponent {
  constructor(private service: EmployeeRoleService) {

  }
  id: any = 0;
  submit() {
    this.service.delete(this.id).subscribe(resp => {
      window.alert(resp);
    });
  }
}
