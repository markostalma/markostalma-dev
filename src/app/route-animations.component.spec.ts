import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAnimationsComponent } from './route-animations.component';

describe('RouteAnimationsComponent', () => {
  let component: RouteAnimationsComponent;
  let fixture: ComponentFixture<RouteAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
