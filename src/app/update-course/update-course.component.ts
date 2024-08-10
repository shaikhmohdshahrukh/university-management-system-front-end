import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorsService } from '../professors.service';
import { Professors } from '../professors';
import { CoursesService } from '../courses.service';
import { Courses } from '../courses';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrl: './update-course.component.css'
})
export class UpdateCourseComponent {

  courseId:number=0;
  constructor(private route:ActivatedRoute, private coursesService:CoursesService, private router:Router){}

  courses:Courses=new Courses();

  ngOnInit():void{
    this.courseId=this.route.snapshot.params['courseId'];
    this.coursesService.getCourseById(this.courseId).subscribe(data=>{
      this.courses=data;
    })
  }

  onSubmit(){
  
    this.coursesService.updateCourse(this.courseId,this.courses).subscribe(data=>{
      console.log(data);
      this.goToCourse();
    })
  }
  
  goToCourse(){
    this.router.navigate(['courses'])
  }
}
