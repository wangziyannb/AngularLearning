import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InterviewService } from 'src/app/shared/services/interview/interview.service';

@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview.component.html',
  styleUrls: ['./add-interview.component.css']
})
export class AddInterviewComponent {
  constructor(private service: InterviewService) {

  }
  myForm = new FormGroup({
    recruiterId: new FormControl('', [Validators.required]),
    submissionId: new FormControl('', [Validators.required]),
    interviewTypeCode: new FormControl('', [Validators.required]),
    interviewRound: new FormControl('', [Validators.required]),
    scheduledOn: new FormControl('', [Validators.required]),
    interviewerId: new FormControl('', [Validators.required]),
  });

  submit() {
    this.service.create(this.myForm.value).subscribe(data => {
      window.alert(data);
    });
  }
}
