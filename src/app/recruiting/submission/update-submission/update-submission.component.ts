import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubmissionService } from 'src/app/shared/services/recruiting/submission.service';

@Component({
  selector: 'app-update-submission',
  templateUrl: './update-submission.component.html',
  styleUrls: ['./update-submission.component.css']
})
export class UpdateSubmissionComponent {
  constructor(private service: SubmissionService) {

  }
  myForm = new FormGroup({
    submissionId: new FormControl('', [Validators.required]),
    jobRequirementId: new FormControl('', [Validators.required]),
    candidateId: new FormControl('', [Validators.required]),
    submissionStatusCode: new FormControl('', [Validators.required]),
    submittedOn: new FormControl('', [Validators.required]),
    confirmedOn: new FormControl('', [Validators.required]),
    rejectedOn: new FormControl('', [Validators.required]),
  });

  submit() {
    this.service.update(this.myForm.value).subscribe(data => {
      window.alert(data);
    });
  }
}
