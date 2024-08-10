import { Component } from '@angular/core';
import { Courses } from '../courses';
import { CoursesService } from '../courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {

  
  courses:Courses= new Courses();

  constructor(private coursesService:CoursesService, private router:Router){}

  
  saveCourse(){

    this.coursesService.addCourse(this.courses).subscribe(data=>{
      console.log(data);
      this.gotoCourse();
    })
  }
  onSubmit(){

    this.saveCourse();
  }

  gotoCourse(){
    this.router.navigate(['courses'])
  }
}
