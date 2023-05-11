import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InterviewerService } from 'src/app/shared/services/interview/interviewer.service';

@Component({
  selector: 'app-update-interviewer',
  templateUrl: './update-interviewer.component.html',
  styleUrls: ['./update-interviewer.component.css']
})
export class UpdateInterviewerComponent {
  constructor(private service: InterviewerService) {

  }
  myForm = new FormGroup({
    interviewerId: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    employeeId: new FormControl('', [Validators.required]),
  });

  submit() {
    this.service.update(this.myForm.value).subscribe(data => {
      window.alert(data);
    });
  }
}
