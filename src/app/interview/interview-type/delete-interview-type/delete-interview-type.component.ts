import { Component } from '@angular/core';
import { InterviewTypeService } from 'src/app/shared/services/interview/interview-type.service';

@Component({
  selector: 'app-delete-interview-type',
  templateUrl: './delete-interview-type.component.html',
  styleUrls: ['./delete-interview-type.component.css']
})
export class DeleteInterviewTypeComponent {
  constructor(private service: InterviewTypeService) {

  }
  id: any = 0;
  submit() {
    this.service.delete(this.id).subscribe(resp => {
      window.alert(resp);
    });
  }
}
