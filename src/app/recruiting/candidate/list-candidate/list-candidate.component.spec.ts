import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCandidateComponent } from './list-candidate.component';

describe('ListCandidateComponent', () => {
  let component: ListCandidateComponent;
  let fixture: ComponentFixture<ListCandidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCandidateComponent]
    });
    fixture = TestBed.createComponent(ListCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
