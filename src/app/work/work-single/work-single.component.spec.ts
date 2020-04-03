import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSingleComponent } from './work-single.component';

describe('WorkSingleComponent', () => {
  let component: WorkSingleComponent;
  let fixture: ComponentFixture<WorkSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
