import { Component } from '@angular/core';
import { SubmissionStatusService } from 'src/app/shared/services/recruiting/submission-status.service';

@Component({
  selector: 'app-delete-submission-status',
  templateUrl: './delete-submission-status.component.html',
  styleUrls: ['./delete-submission-status.component.css']
})
export class DeleteSubmissionStatusComponent {
  constructor(private service: SubmissionStatusService) {

  }
  id: any = 0;
  submit() {
    this.service.delete(this.id).subscribe(resp => {
      window.alert(resp);
    });
  }
}
