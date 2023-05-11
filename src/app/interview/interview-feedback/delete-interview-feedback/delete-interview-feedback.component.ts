import { Component } from '@angular/core';
import { InterviewFeedbackService } from 'src/app/shared/services/interview/interview-feedback.service';

@Component({
  selector: 'app-delete-interview-feedback',
  templateUrl: './delete-interview-feedback.component.html',
  styleUrls: ['./delete-interview-feedback.component.css']
})
export class DeleteInterviewFeedbackComponent {
  constructor(private service: InterviewFeedbackService) {

  }
  id: any = 0;
  submit() {
    this.service.delete(this.id).subscribe(resp => {
      window.alert(resp);
    });
  }
}
