import { Component } from '@angular/core';

@Component({
  selector: 'app-course-parent',
  templateUrl: './course-parent.component.html',
  styleUrls: ['./course-parent.component.css'],
})
export class CourseParentComponent {
  courseName = 'course-parent';
  courseDetails = 'this is course description';
}
