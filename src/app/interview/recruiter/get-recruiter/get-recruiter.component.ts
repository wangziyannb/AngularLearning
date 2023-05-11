import { Component } from '@angular/core';
import { RecruiterService } from 'src/app/shared/services/interview/recruiter.service';

@Component({
  selector: 'app-get-recruiter',
  templateUrl: './get-recruiter.component.html',
  styleUrls: ['./get-recruiter.component.css']
})
export class GetRecruiterComponent {
  constructor(private service: RecruiterService) {

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
