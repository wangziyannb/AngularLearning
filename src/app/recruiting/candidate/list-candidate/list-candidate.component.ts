import { Component } from '@angular/core';
import { CandidateService } from 'src/app/shared/services/recruiting/candidate.service';

@Component({
  selector: 'app-list-candidate',
  templateUrl: './list-candidate.component.html',
  styleUrls: ['./list-candidate.component.css']
})
export class ListCandidateComponent {
  candidates: any[] = [];
  constructor(private service: CandidateService) {
    this.service.getAll().subscribe(candidates => {
      this.candidates = this.candidates.concat(candidates);
    });
  }
}
