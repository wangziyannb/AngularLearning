import { Component } from '@angular/core';
import { SubmissionService } from 'src/app/shared/services/recruiting/submission.service';

@Component({
  selector: 'app-delete-submission',
  templateUrl: './delete-submission.component.html',
  styleUrls: ['./delete-submission.component.css']
})
export class DeleteSubmissionComponent {
  constructor(private service: SubmissionService) {

  }
  id: any = 0;
  submit() {
    this.service.delete(this.id).subscribe(resp => {
      window.alert(resp);
    });
  }
}
