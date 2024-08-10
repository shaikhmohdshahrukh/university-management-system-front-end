import { Component } from '@angular/core';
import { Students } from '../students';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {

  students:Students= new Students();

  constructor(private studentsService:StudentsService, private router:Router){}


  saveStudent(){

    this.studentsService.addStudent(this.students).subscribe(data=>{
      console.log(data);
      this.gotoStudent();
    })
  }
  onSubmit(){

    this.saveStudent();
  }

  gotoStudent(){
    this.router.navigate(['/students'])
  }
}
