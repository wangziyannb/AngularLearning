import { Component } from '@angular/core';
import { EmployeeStatusService } from 'src/app/shared/services/onboarding/employee-status.service';

@Component({
  selector: 'app-delete-employee-status',
  templateUrl: './delete-employee-status.component.html',
  styleUrls: ['./delete-employee-status.component.css']
})
export class DeleteEmployeeStatusComponent {
  constructor(private service: EmployeeStatusService) {

  }
  id: any = 0;
  submit() {
    this.service.delete(this.id).subscribe(resp => {
      window.alert(resp);
    });
  }
}
