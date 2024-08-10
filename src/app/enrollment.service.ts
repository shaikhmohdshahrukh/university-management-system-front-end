import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enrollment } from './enrollment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://localhost:8080/enrollments";

  getEnrollmentList():Observable<Enrollment[]>{

    return this.httpClient.get<Enrollment[]>(`${this.baseUrl}`);
  }
  addEnrollment(enrollment:Enrollment):Observable<Enrollment>{

    return this.httpClient.post<Enrollment>(`${this.baseUrl}`,enrollment);
  }
  deleteEnrollment(enrollmentId:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${enrollmentId}`);
  }

  getEnrollmentById(enrollmentId:number):Observable<Enrollment>{

    return this.httpClient.get<Enrollment>(`${this.baseUrl}/${enrollmentId}`);
  }
  
  updateEnrollment(enrollmentId:number, enrollment:Enrollment):Observable<object>{
    return this.httpClient.put<Enrollment>(`${this.baseUrl}/${enrollmentId}`,enrollment);
  }
}
