import { Component, Input } from '@angular/core';

import { CourseParentComponent } from '../course-parent/course-parent.component';

@Component({
  selector: 'app-course-details-child',
  templateUrl: './course-details-child.component.html',
  styleUrls: ['./course-details-child.component.css'],
})
export class CourseDetailsChildComponent {
  @Input() courseName = '';
  @Input() courseDetails = '';
}
