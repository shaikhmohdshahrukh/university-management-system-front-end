// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Enrollments } from './enrollments';
// import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class EnrollmentsService {

//   constructor(private httpClient:HttpClient) { }

//   private baseUrl="http://localhost:8080/enrollments";

//   getEnrollmentList():Observable<Enrollments[]>{

//     return this.httpClient.get<Enrollments[]>(`${this.baseUrl}`);
//   }
//   addEnrollment(enrollments:Enrollments):Observable<Enrollments>{

//     return this.httpClient.post<Enrollments>(`${this.baseUrl}`,enrollments);
//   }
//   deleteEnrollment(enrollmentId:number):Observable<Object>{
//     return this.httpClient.delete(`${this.baseUrl}/${enrollmentId}`);
//   }

//   getEnrollmentById(enrollmentId:number):Observable<Enrollments>{

//     return this.httpClient.get<Enrollments>(`${this.baseUrl}/${enrollmentId}`);
//   }
  
//   updateEnrollment(enrollmentId:number, enrollments:Enrollments):Observable<object>{
//     return this.httpClient.put<Enrollments>(`${this.baseUrl}/${enrollmentId}`,enrollments);
//   }
// }
