import { Component } from '@angular/core';
import { CandidateService } from 'src/app/shared/services/recruiting/candidate.service';

@Component({
  selector: 'app-get-candidate',
  templateUrl: './get-candidate.component.html',
  styleUrls: ['./get-candidate.component.css']
})
export class GetCandidateComponent {
  constructor(private service: CandidateService) {

  }
  id: any = 0;
  candidates: any[] = [];
  submit() {
    this.service.get(this.id).subscribe(resp => {
      this.candidates = this.candidates.concat(resp);
      console.log(resp);
      
    });
  }
}
