import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorsService } from '../professors.service';
import { Professors } from '../professors';

@Component({
  selector: 'app-update-professor',
  templateUrl: './update-professor.component.html',
  styleUrl: './update-professor.component.css'
})
export class UpdateProfessorComponent {

  
  professorId:number=0;
  constructor(private route:ActivatedRoute, private professorsService:ProfessorsService, private router:Router){}

  professors:Professors=new Professors();

  ngOnInit():void{
    this.professorId=this.route.snapshot.params['professorId'];
    this.professorsService.getProfessorById(this.professorId).subscribe(data=>{
      this.professors=data;
    })
  }

  onSubmit(){
  
    this.professorsService.updateProfessor(this.professorId,this.professors).subscribe(data=>{
      console.log(data);
      this.goToProfessor();
    })
  }
  
  goToProfessor(){
    this.router.navigate(['professor'])
  }
}
