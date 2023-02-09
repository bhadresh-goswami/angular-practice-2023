import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsChildComponent } from './course-details-child.component';

describe('CourseDetailsChildComponent', () => {
  let component: CourseDetailsChildComponent;
  let fixture: ComponentFixture<CourseDetailsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetailsChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetailsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
