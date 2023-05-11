import { Component } from '@angular/core';
import { InterviewService } from 'src/app/shared/services/interview/interview.service';

@Component({
  selector: 'app-delete-interview',
  templateUrl: './delete-interview.component.html',
  styleUrls: ['./delete-interview.component.css']
})
export class DeleteInterviewComponent {
  constructor(private service: InterviewService) {

  }
  id: any = 0;
  submit() {
    this.service.delete(this.id).subscribe(resp => {
      window.alert(resp);
    });
  }
}
