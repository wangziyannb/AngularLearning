import { Component } from '@angular/core';
import { RecruiterService } from 'src/app/shared/services/interview/recruiter.service';

@Component({
  selector: 'app-delete-recruiter',
  templateUrl: './delete-recruiter.component.html',
  styleUrls: ['./delete-recruiter.component.css']
})
export class DeleteRecruiterComponent {
  constructor(private service: RecruiterService) {

  }
  id: any = 0;
  submit() {
    this.service.delete(this.id).subscribe(resp => {
      window.alert(resp);
    });
  }
}
