import { Component } from '@angular/core';
import { Results } from '../results';
import { ResultsService } from '../results.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {

  results:Results[] = [];

  constructor(private resultsService:ResultsService, private router:Router) { }

  ngOnInit():void {
    this.getResults();
  }

  getResults(){
    this.resultsService.getResultList().subscribe(
      data=>{
        this.results=data;
      });
}

    delete(resultId: number) {
      this.resultsService.deleteResult(resultId).subscribe(data => {
        console.log(data);
        this.getResults();
      });
    }
  
    // update(admissionId: number) {
    //   this.router.navigate(['update-admission', admissionId]);
    // }
  
    // view(admissionId: number) {
    //   this.router.navigate(['view-admission', admissionId]);
    // }
}

