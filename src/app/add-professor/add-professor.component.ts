import { Component } from '@angular/core';
import { Professors } from '../professors';
import { ProfessorsService } from '../professors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrl: './add-professor.component.css'
})
export class AddProfessorComponent {

  
  professors:Professors= new Professors();

  constructor(private professorsService:ProfessorsService, private router:Router){}


  saveProfessor(){

    this.professorsService.addProfessor(this.professors).subscribe(data=>{
      console.log(data);
      this.gotoProfessor();
    })
  }
  onSubmit(){
    this.saveProfessor();
  }

  gotoProfessor(){
    this.router.navigate(['/professors'])
  }

}
