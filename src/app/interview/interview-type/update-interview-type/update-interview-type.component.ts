import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InterviewTypeService } from 'src/app/shared/services/interview/interview-type.service';

@Component({
  selector: 'app-update-interview-type',
  templateUrl: './update-interview-type.component.html',
  styleUrls: ['./update-interview-type.component.css']
})
export class UpdateInterviewTypeComponent {
  constructor(private service: InterviewTypeService) {

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
