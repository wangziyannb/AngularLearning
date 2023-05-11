import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecruiterService } from 'src/app/shared/services/interview/recruiter.service';

@Component({
  selector: 'app-update-recruiter',
  templateUrl: './update-recruiter.component.html',
  styleUrls: ['./update-recruiter.component.css']
})
export class UpdateRecruiterComponent {
  constructor(private service: RecruiterService) {

  }
  myForm = new FormGroup({
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
