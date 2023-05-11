import { Component } from '@angular/core';
import { InterviewFeedbackService } from 'src/app/shared/services/interview/interview-feedback.service';

@Component({
  selector: 'app-get-interview-feedback',
  templateUrl: './get-interview-feedback.component.html',
  styleUrls: ['./get-interview-feedback.component.css']
})
export class GetInterviewFeedbackComponent {
  constructor(private service: InterviewFeedbackService) {

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
