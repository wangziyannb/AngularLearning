import { Component } from '@angular/core';
import { JobRequirementService } from 'src/app/shared/services/recruiting/job-requirement.service';

@Component({
  selector: 'app-delete-job-requirement',
  templateUrl: './delete-job-requirement.component.html',
  styleUrls: ['./delete-job-requirement.component.css']
})
export class DeleteJobRequirementComponent {
  constructor(private service: JobRequirementService) {

  }
  id: any = 0;
  submit() {
    this.service.delete(this.id).subscribe(resp => {
      window.alert(resp);
    });
  }
}
