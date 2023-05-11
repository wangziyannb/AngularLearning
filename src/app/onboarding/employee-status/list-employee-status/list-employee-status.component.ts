import { Component } from '@angular/core';
import { EmployeeStatusService } from 'src/app/shared/services/onboarding/employee-status.service';

@Component({
  selector: 'app-list-employee-status',
  templateUrl: './list-employee-status.component.html',
  styleUrls: ['./list-employee-status.component.css']
})
export class ListEmployeeStatusComponent {
  c: any[] = [];
  constructor(private service: EmployeeStatusService) {
    this.service.getAll().subscribe(resp => {
      this.c = this.c.concat(resp);
      console.log(resp);

    });
  }
}
