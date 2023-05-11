import { Component } from '@angular/core';
import { InterviewerService } from 'src/app/shared/services/interview/interviewer.service';

@Component({
  selector: 'app-list-interviewer',
  templateUrl: './list-interviewer.component.html',
  styleUrls: ['./list-interviewer.component.css']
})
export class ListInterviewerComponent {
  c: any[] = [];
  constructor(private service: InterviewerService) {
    this.service.getAll().subscribe(resp => {
      this.c = this.c.concat(resp);
      console.log(resp);
    });
  }
}
