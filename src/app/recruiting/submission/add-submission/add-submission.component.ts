import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubmissionService } from 'src/app/shared/services/recruiting/submission.service';

@Component({
  selector: 'app-add-submission',
  templateUrl: './add-submission.component.html',
  styleUrls: ['./add-submission.component.css']
})
export class AddSubmissionComponent {
  constructor(private service: SubmissionService) {

  }
  myForm = new FormGroup({
    jobRequirementId: new FormControl('', [Validators.required]),
    candidateId: new FormControl('', [Validators.required]),
    submissionStatusCode: new FormControl('', [Validators.required]),
    submittedOn: new FormControl('', [Validators.required]),
    confirmedOn: new FormControl('', [Validators.required]),
    rejectedOn: new FormControl('', [Validators.required]),
  });

  submit() {
    this.service.create(this.myForm.value).subscribe(data => {
      window.alert(data);
    });
  }
}
