import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubmissionStatusService } from 'src/app/shared/services/recruiting/submission-status.service';

@Component({
  selector: 'app-update-submission-status',
  templateUrl: './update-submission-status.component.html',
  styleUrls: ['./update-submission-status.component.css']
})
export class UpdateSubmissionStatusComponent {
  constructor(private service: SubmissionStatusService) {

  }
  myForm = new FormGroup({
    lookupCode: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),

  });

  submit() {
    this.service.update(this.myForm.value).subscribe(data => {
      window.alert(data);
    });
  }
}
