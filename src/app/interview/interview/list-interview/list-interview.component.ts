import { Component } from '@angular/core';
import { InterviewService } from 'src/app/shared/services/interview/interview.service';

@Component({
  selector: 'app-list-interview',
  templateUrl: './list-interview.component.html',
  styleUrls: ['./list-interview.component.css']
})
export class ListInterviewComponent {
  c: any[] = [];
  constructor(private service: InterviewService) {
    this.service.getAll().subscribe(resp => {
      this.c = this.c.concat(resp);
      console.log(resp);
    });
  }
}
