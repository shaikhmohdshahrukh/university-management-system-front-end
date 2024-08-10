import { Component } from '@angular/core';
import { Courses } from '../courses';
import { CoursesService } from '../courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrl: './view-course.component.css'
})
export class ViewCourseComponent {

  courseId = 0;
  courses: Courses = new Courses();

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['courseId'];
    this.coursesService.getCourseById(this.courseId).subscribe(data => {
      this.courses = data; // Assign data to the students object
    });
  }
}
