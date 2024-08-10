import { Component } from '@angular/core';
import { Students } from '../students';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent {

  studentId:number=0;
  constructor(private route:ActivatedRoute, private studentsService:StudentsService, private router:Router){}

  students:Students=new Students();

  ngOnInit():void{
    this.studentId=this.route.snapshot.params['studentId'];
    this.studentsService.getStudentById(this.studentId).subscribe(data=>{
      this.students=data;
    })
  }

  onSubmit(){
  
    this.studentsService.updateStudent(this.studentId,this.students).subscribe(data=>{
      console.log(data);
      this.goToStudent();
    })
  }
  
  goToStudent(){
    this.router.navigate(['students'])
  }
}
