import { Component } from '@angular/core';
import { JobRequirementService } from 'src/app/shared/services/recruiting/job-requirement.service';

@Component({
  selector: 'app-get-job-requirement',
  templateUrl: './get-job-requirement.component.html',
  styleUrls: ['./get-job-requirement.component.css']
})
export class GetJobRequirementComponent {
  constructor(private service: JobRequirementService) {

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
