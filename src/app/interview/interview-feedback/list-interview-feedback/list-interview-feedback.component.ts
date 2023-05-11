import { Component } from '@angular/core';
import { InterviewFeedbackService } from 'src/app/shared/services/interview/interview-feedback.service';

@Component({
  selector: 'app-list-interview-feedback',
  templateUrl: './list-interview-feedback.component.html',
  styleUrls: ['./list-interview-feedback.component.css']
})
export class ListInterviewFeedbackComponent {
  c: any[] = [];
  constructor(private service: InterviewFeedbackService) {
    this.service.getAll().subscribe(resp => {
      this.c = this.c.concat(resp);
      console.log(resp);

    });
  }

}
