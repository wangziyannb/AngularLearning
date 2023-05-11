import { Component } from '@angular/core';
import { SubmissionService } from 'src/app/shared/services/recruiting/submission.service';

@Component({
  selector: 'app-get-submission',
  templateUrl: './get-submission.component.html',
  styleUrls: ['./get-submission.component.css']
})
export class GetSubmissionComponent {
  constructor(private service: SubmissionService) {

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
