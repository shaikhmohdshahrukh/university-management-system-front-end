import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from './students';


@Injectable({
  providedIn: 'root'
})
export class StudentsService { 
  constructor(private httpClient:HttpClient) { }

private baseUrl = "http://localhost:8080/students";

getStudentList():Observable<Students[]>{

  return this.httpClient.get<Students[]>(`${this.baseUrl}`);
}

addStudent(students:Students):Observable<Students>{

  return this.httpClient.post<Students>(`${this.baseUrl}`,students);
}

deleteStudent(studentId:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseUrl}/${studentId}`);
}
getStudentById(studentId:number):Observable<Students>{

  return this.httpClient.get<Students>(`${this.baseUrl}/${studentId}`);
}

updateStudent(studentId:number, students:Students):Observable<object>{
  return this.httpClient.put<Students>(`${this.baseUrl}/${studentId}`,students);
}
}
