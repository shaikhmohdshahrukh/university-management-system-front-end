import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Students } from '../students';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students:Students[] = [];

  constructor(private studentService: StudentsService, private router:Router) { }

  ngOnInit():void {
    this.getStudents();
  }

  getStudents(){
    this.studentService.getStudentList().subscribe(
      data=>{
        this.students=data;
      });
}
delete(studentId:number){

  this.studentService.deleteStudent(studentId).subscribe(data=>{
    console.log(data)
    this.getStudents();
  })
}
update(studentId:number){

  this.router.navigate(['update-student',studentId])
}

view(studentId:number){
  this.router.navigate(['view-student',studentId]);
}
}
