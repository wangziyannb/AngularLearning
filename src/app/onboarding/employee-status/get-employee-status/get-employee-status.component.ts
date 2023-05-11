import { Component } from '@angular/core';
import { EmployeeStatusService } from 'src/app/shared/services/onboarding/employee-status.service';

@Component({
  selector: 'app-get-employee-status',
  templateUrl: './get-employee-status.component.html',
  styleUrls: ['./get-employee-status.component.css']
})
export class GetEmployeeStatusComponent {
  constructor(private service: EmployeeStatusService) {

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
