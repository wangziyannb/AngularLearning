import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubmissionStatusService } from 'src/app/shared/services/recruiting/submission-status.service';

@Component({
  selector: 'app-add-submission-status',
  templateUrl: './add-submission-status.component.html',
  styleUrls: ['./add-submission-status.component.css']
})
export class AddSubmissionStatusComponent {
  constructor(private service: SubmissionStatusService) {

  }
  myForm = new FormGroup({
    description: new FormControl('', [Validators.required]),

  });

  submit() {
    this.service.create(this.myForm.value).subscribe(data => {
      window.alert(data);
    });
  }
}
