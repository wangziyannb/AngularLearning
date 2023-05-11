import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/onboarding/employee.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent {
  constructor(private service: EmployeeService) {

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
