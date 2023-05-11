import { Component } from '@angular/core';
import { InterviewTypeService } from 'src/app/shared/services/interview/interview-type.service';

@Component({
  selector: 'app-list-interview-type',
  templateUrl: './list-interview-type.component.html',
  styleUrls: ['./list-interview-type.component.css']
})
export class ListInterviewTypeComponent {
  c: any[] = [];
  constructor(private service: InterviewTypeService) {
    this.service.getAll().subscribe(resp => {
      this.c = this.c.concat(resp);
      console.log(resp);

    });
  }
}
