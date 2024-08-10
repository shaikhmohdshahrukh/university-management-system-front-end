import { Component } from '@angular/core';
import { Professors } from '../professors';
import { ProfessorsService } from '../professors.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-professor',
  templateUrl: './view-professor.component.html',
  styleUrl: './view-professor.component.css'
})
export class ViewProfessorComponent {

  
  professorId = 0;
  professors: Professors = new Professors();

  constructor(private professorsService: ProfessorsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.professorId = this.route.snapshot.params['professorId'];
    this.professorsService.getProfessorById(this.professorId).subscribe(data => {
      this.professors = data; // Assign data to the students object
    });
  }
}
