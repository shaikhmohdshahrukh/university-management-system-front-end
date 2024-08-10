import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Results } from './results';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  
  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:8080/results";

  getResultList(): Observable<Results[]> {
    return this.httpClient.get<Results[]>(`${this.baseUrl}`);
  }

  addResult(results: Results): Observable<Results> {
    return this.httpClient.post<Results>(`${this.baseUrl}`, results);
  }

  deleteResult(resultId: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${resultId}`);
  }

  getGradeById(resultId: number): Observable<Results> {
    return this.httpClient.get<Results>(`${this.baseUrl}/${resultId}`);
  }

  updateGrade(resultId: number, results: Results): Observable<object> {
    return this.httpClient.put(`${this.baseUrl}/${resultId}`, results);
  }

}
