import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInterviewComponent } from './delete-interview.component';

describe('DeleteInterviewComponent', () => {
  let component: DeleteInterviewComponent;
  let fixture: ComponentFixture<DeleteInterviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteInterviewComponent]
    });
    fixture = TestBed.createComponent(DeleteInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
