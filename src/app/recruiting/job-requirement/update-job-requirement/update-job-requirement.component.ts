import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobRequirementService } from 'src/app/shared/services/recruiting/job-requirement.service';

@Component({
  selector: 'app-update-job-requirement',
  templateUrl: './update-job-requirement.component.html',
  styleUrls: ['./update-job-requirement.component.css']
})
export class UpdateJobRequirementComponent {
  constructor(private service: JobRequirementService) {

  }
  myForm = new FormGroup({
    jobRequirementId: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    numberOfPosition: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    hiringManagerId: new FormControl('', [Validators.required]),
    hiringManagerName: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    isActivate: new FormControl('', [Validators.required]),
    closedOn: new FormControl('', [Validators.required]),
    closedReason: new FormControl('', [Validators.required]),
    createdOn: new FormControl('', [Validators.required]),
    jobCategory: new FormControl('', [Validators.required]),
    employeeType: new FormControl('', [Validators.required]),
  });

  submit() {
    this.service.update(this.myForm.value).subscribe(data => {
      window.alert(data);
    });
  }
}
