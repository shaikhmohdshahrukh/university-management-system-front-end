import { Component, OnInit } from '@angular/core';
import { Admissions } from '../admissions';
import { AdmissionsService } from '../admissions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.css'
})

 export class AdmissionsComponent {

  admissions:Admissions[] = [];

  constructor(private admissionsService:AdmissionsService, private router:Router) { }

  ngOnInit():void {
    this.getAdmissions();
  }

  getAdmissions(){
    this.admissionsService.getAdmissionList().subscribe(
      data=>{
        this.admissions=data;
      });
}

    delete(admissionId: number) {
      this.admissionsService.deleteAdmission(admissionId).subscribe(data => {
        console.log(data);
        this.getAdmissions();
      });
    }
  
    // update(admissionId: number) {
    //   this.router.navigate(['update-admission', admissionId]);
    // }
  
    // view(admissionId: number) {
    //   this.router.navigate(['view-admission', admissionId]);
    // }
}
