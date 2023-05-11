import { Component } from '@angular/core';
import { JobRequirementService } from 'src/app/shared/services/recruiting/job-requirement.service';

@Component({
  selector: 'app-list-job-requirement',
  templateUrl: './list-job-requirement.component.html',
  styleUrls: ['./list-job-requirement.component.css']
})
export class ListJobRequirementComponent {
  c: any[] = [];
  constructor(private service: JobRequirementService) {
    this.service.getAll().subscribe(resp => {
      this.c = this.c.concat(resp);
      console.log(resp);
    });
  }
}
