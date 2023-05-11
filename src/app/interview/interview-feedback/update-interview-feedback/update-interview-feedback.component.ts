import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InterviewFeedbackService } from 'src/app/shared/services/interview/interview-feedback.service';

@Component({
  selector: 'app-update-interview-feedback',
  templateUrl: './update-interview-feedback.component.html',
  styleUrls: ['./update-interview-feedback.component.css']
})
export class UpdateInterviewFeedbackComponent {
  constructor(private service: InterviewFeedbackService) {

  }
  myForm = new FormGroup({
    interviewFeedbackId: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required]),
    comment: new FormControl('', [Validators.required]),
    interviewId: new FormControl('', [Validators.required]),
  });

  submit() {
    this.service.update(this.myForm.value).subscribe(data => {
      window.alert(data);
    });
  }
}
