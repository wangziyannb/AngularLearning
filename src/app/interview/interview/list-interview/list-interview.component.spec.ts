import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInterviewComponent } from './list-interview.component';

describe('ListInterviewComponent', () => {
  let component: ListInterviewComponent;
  let fixture: ComponentFixture<ListInterviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListInterviewComponent]
    });
    fixture = TestBed.createComponent(ListInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
