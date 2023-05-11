import { Component } from '@angular/core';
import { InterviewerService } from 'src/app/shared/services/interview/interviewer.service';

@Component({
  selector: 'app-get-interviewer',
  templateUrl: './get-interviewer.component.html',
  styleUrls: ['./get-interviewer.component.css']
})
export class GetInterviewerComponent {
  constructor(private service: InterviewerService) {

  }
  id: any = 0;
  c: any[] = [];
  submit() {
    this.service.get(this.id).subscribe(resp => {
      this.c = this.c.concat(resp);
      console.log(resp);

    });
  }
}
