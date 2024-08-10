import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { ActivatedRoute } from '@angular/router';
import { Students } from '../students';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrl: './view-student.component.css'
})
export class ViewStudentComponent {
  studentId = 0;
  students: Students = new Students();

  constructor(private studentsService: StudentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['studentId'];
    this.studentsService.getStudentById(this.studentId).subscribe(data => {
      this.students = data; // Assign data to the students object
    });
  }
}

