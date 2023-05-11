import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InterviewTypeService } from 'src/app/shared/services/interview/interview-type.service';

@Component({
  selector: 'app-add-interview-type',
  templateUrl: './add-interview-type.component.html',
  styleUrls: ['./add-interview-type.component.css']
})
export class AddInterviewTypeComponent {
  constructor(private service: InterviewTypeService) {

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
