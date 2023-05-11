import { Component } from '@angular/core';
import { InterviewService } from 'src/app/shared/services/interview/interview.service';

@Component({
  selector: 'app-get-interview',
  templateUrl: './get-interview.component.html',
  styleUrls: ['./get-interview.component.css']
})
export class GetInterviewComponent {
  constructor(private service: InterviewService) {

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
