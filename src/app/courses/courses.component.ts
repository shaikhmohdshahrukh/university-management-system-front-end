import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Courses } from '../courses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  courses:Courses[] = [];
  constructor(private coursesService:CoursesService, private router:Router) { }

  ngOnInit():void {
    this.getCourses();
  }

  getCourses(){
    this.coursesService.getCourseList().subscribe(
      data=>{
        this.courses=data;
      });
}
delete(courseId:number){

  this.coursesService.deleteCourse(courseId).subscribe(data=>{
    console.log(data)
    this.getCourses();
  })
}
update(courseId:number){

  this.router.navigate(['update-course',courseId])
}
view(courseId:number){
  this.router.navigate(['view-course',courseId]);
}
}

