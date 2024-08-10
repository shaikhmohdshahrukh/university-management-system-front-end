import { Injectable } from '@angular/core';
import { Professors } from './professors';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl = "http://localhost:8080/professors";
  
  getProfessorList():Observable<Professors[]>{
  
    return this.httpClient.get<Professors[]>(`${this.baseUrl}`);
  }
  addProfessor(professors:Professors):Observable<Professors>{

    return this.httpClient.post<Professors>(`${this.baseUrl}`,professors);
  }
  deleteProfessor(professorId:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${professorId}`);
  }
  getProfessorById(professorId:number):Observable<Professors>{

    return this.httpClient.get<Professors>(`${this.baseUrl}/${professorId}`);
  }
  
  updateProfessor(professorId:number, professors:Professors):Observable<object>{
    return this.httpClient.put<Professors>(`${this.baseUrl}/${professorId}`,professors);
  }

}
