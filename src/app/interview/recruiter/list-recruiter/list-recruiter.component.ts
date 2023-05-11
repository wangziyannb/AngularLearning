import { Component } from '@angular/core';
import { RecruiterService } from 'src/app/shared/services/interview/recruiter.service';

@Component({
  selector: 'app-list-recruiter',
  templateUrl: './list-recruiter.component.html',
  styleUrls: ['./list-recruiter.component.css']
})
export class ListRecruiterComponent {
  c: any[] = [];
  constructor(private service: RecruiterService) {
    this.service.getAll().subscribe(resp => {
      this.c = this.c.concat(resp);
      console.log(resp);
    });
  }
}
