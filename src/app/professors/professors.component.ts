import { Component } from '@angular/core';
import { Professors } from '../professors';
import { ProfessorsService } from '../professors.service';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrl: './professors.component.css'
})
export class ProfessorsComponent {

  professors:Professors[] = [];

  constructor(private professorsService: ProfessorsService, private router:Router) { }

  ngOnInit():void {
    this.getProfessors();
  }

  getProfessors(){
    this.professorsService.getProfessorList().subscribe(
      data=>{
        this.professors=data;
      });
}
delete(professorId:number){

  this.professorsService.deleteProfessor(professorId).subscribe(data=>{
    console.log(data)
    this.getProfessors();
  })
}
update(professorId:number){

  this.router.navigate(['update-professor',professorId])
}
view(professorId:number){
  this.router.navigate(['view-professor',professorId]);
}
}
