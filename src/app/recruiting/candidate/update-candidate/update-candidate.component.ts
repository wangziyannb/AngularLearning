import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CandidateService } from 'src/app/shared/services/recruiting/candidate.service';

@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent {
  constructor(private service: CandidateService) {

  }
  myForm = new FormGroup({
    candidateId: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    middleName: new FormControl(''),
    firstName: new FormControl('', [Validators.required]),
    resumeURL: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  get candidateId() {
    return this.myForm.get('candidateId');
  }
  get lastName() {
    return this.myForm.get('lastName');
  }
  get middleName() {
    return this.myForm.get('middleName');
  }
  get firstName() {
    return this.myForm.get('firstName');
  }
  get resumeURL() {
    return this.myForm.get('resumeURL');
  }
  get email() {
    return this.myForm.get('email');
  }
  submit() {
    this.service.update(this.myForm.value).subscribe(data => {
      window.alert(data);
    });
  }
}
