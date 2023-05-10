import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CandidateService } from 'src/app/shared/services/recruiting/candidate.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent {
  constructor(private service: CandidateService) {

  }
  myForm = new FormGroup({
    lastName: new FormControl('', [Validators.required]),
    middleName: new FormControl(''),
    firstName: new FormControl('', [Validators.required]),
    resumeURL: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
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
    this.service.create(this.myForm.value).subscribe(data => {
      window.alert(data);
    });
  }
}
