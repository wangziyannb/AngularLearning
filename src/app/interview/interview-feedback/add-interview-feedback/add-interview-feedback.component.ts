import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InterviewFeedbackService } from 'src/app/shared/services/interview/interview-feedback.service';

@Component({
  selector: 'app-add-interview-feedback',
  templateUrl: './add-interview-feedback.component.html',
  styleUrls: ['./add-interview-feedback.component.css']
})
export class AddInterviewFeedbackComponent {
  constructor(private service: InterviewFeedbackService) {

  }
  myForm = new FormGroup({
    rating: new FormControl('', [Validators.required]),
    comment: new FormControl('', [Validators.required]),
    interviewId: new FormControl('', [Validators.required]),
  });

  submit() {
    this.service.create(this.myForm.value).subscribe(data => {
      window.alert(data);
    });
  }
}
