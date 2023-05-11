import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/onboarding/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {
  constructor(private service: EmployeeService) {

  }
  id: any = 0;
  submit() {
    this.service.delete(this.id).subscribe(resp => {
      window.alert(resp);
    });
  }
}
