import { Component } from '@angular/core';
import { InterviewTypeService } from 'src/app/shared/services/interview/interview-type.service';

@Component({
  selector: 'app-get-interview-type',
  templateUrl: './get-interview-type.component.html',
  styleUrls: ['./get-interview-type.component.css']
})
export class GetInterviewTypeComponent {
  constructor(private service: InterviewTypeService) {

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
