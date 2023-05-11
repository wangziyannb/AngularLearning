import { Component } from '@angular/core';
import { InterviewerService } from 'src/app/shared/services/interview/interviewer.service';

@Component({
  selector: 'app-delete-interviewer',
  templateUrl: './delete-interviewer.component.html',
  styleUrls: ['./delete-interviewer.component.css']
})
export class DeleteInterviewerComponent {
  constructor(private service: InterviewerService) {

  }
  id: any = 0;
  submit() {
    this.service.delete(this.id).subscribe(resp => {
      window.alert(resp);
    });
  }
}
