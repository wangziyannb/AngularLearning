import { Component } from '@angular/core';
import { SubmissionStatusService } from 'src/app/shared/services/recruiting/submission-status.service';

@Component({
  selector: 'app-list-submission-status',
  templateUrl: './list-submission-status.component.html',
  styleUrls: ['./list-submission-status.component.css']
})
export class ListSubmissionStatusComponent {
  c: any[] = [];
  constructor(private service: SubmissionStatusService) {
    this.service.getAll().subscribe(resp => {
      this.c = this.c.concat(resp);
      console.log(resp);
    });
  }
}
