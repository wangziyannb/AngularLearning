import { Component } from '@angular/core';
import { SubmissionStatusService } from 'src/app/shared/services/recruiting/submission-status.service';

@Component({
  selector: 'app-get-submission-status',
  templateUrl: './get-submission-status.component.html',
  styleUrls: ['./get-submission-status.component.css']
})
export class GetSubmissionStatusComponent {
  constructor(private service: SubmissionStatusService) {

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
