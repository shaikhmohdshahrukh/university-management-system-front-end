import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grades } from './grades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  
  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:8080/grades";

  getGradeList(): Observable<Grades[]> {
    return this.httpClient.get<Grades[]>(`${this.baseUrl}`);
  }

  addGrade(grades: Grades): Observable<Grades> {
    return this.httpClient.post<Grades>(`${this.baseUrl}`, grades);
  }

  deleteGrade(gradeId: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${gradeId}`);
  }

  getGradeById(gradeId: number): Observable<Grades> {
    return this.httpClient.get<Grades>(`${this.baseUrl}/${gradeId}`);
  }

  updateGrade(gradeId: number, grades: Grades): Observable<object> {
    return this.httpClient.put(`${this.baseUrl}/${gradeId}`, grades);
  }
 
}
