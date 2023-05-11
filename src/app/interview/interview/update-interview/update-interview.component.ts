import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InterviewService } from 'src/app/shared/services/interview/interview.service';

@Component({
  selector: 'app-update-interview',
  templateUrl: './update-interview.component.html',
  styleUrls: ['./update-interview.component.css']
})
export class UpdateInterviewComponent {
  constructor(private service: InterviewService) {

  }
  myForm = new FormGroup({
    interviewId: new FormControl('', [Validators.required]),
    recruiterId: new FormControl('', [Validators.required]),
    submissionId: new FormControl('', [Validators.required]),
    interviewTypeCode: new FormControl('', [Validators.required]),
    interviewRound: new FormControl('', [Validators.required]),
    scheduledOn: new FormControl('', [Validators.required]),
    interviewerId: new FormControl('', [Validators.required]),
  });

  submit() {
    this.service.update(this.myForm.value).subscribe(data => {
      window.alert(data);
    });
  }
}
