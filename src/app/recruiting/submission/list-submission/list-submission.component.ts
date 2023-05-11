import { Component } from '@angular/core';
import { SubmissionService } from 'src/app/shared/services/recruiting/submission.service';

@Component({
  selector: 'app-list-submission',
  templateUrl: './list-submission.component.html',
  styleUrls: ['./list-submission.component.css']
})
export class ListSubmissionComponent {
  c: any[] = [];
  constructor(private service: SubmissionService) {
    this.service.getAll().subscribe(resp => {
      this.c = this.c.concat(resp);
      console.log(resp);

    });
  }
}
