import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInterviewComponent } from './get-interview.component';

describe('GetInterviewComponent', () => {
  let component: GetInterviewComponent;
  let fixture: ComponentFixture<GetInterviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetInterviewComponent]
    });
    fixture = TestBed.createComponent(GetInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
