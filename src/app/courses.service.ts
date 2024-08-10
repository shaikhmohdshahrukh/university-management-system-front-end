import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Courses } from './courses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://localhost:8080/courses";

  getCourseList():Observable<Courses[]>{

    return this.httpClient.get<Courses[]>(`${this.baseUrl}`);
  }
  addCourse(courses:Courses):Observable<Courses>{

    return this.httpClient.post<Courses>(`${this.baseUrl}`,courses);
  }
  deleteCourse(courseId:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${courseId}`);
  }

  getCourseById(courseId:number):Observable<Courses>{

    return this.httpClient.get<Courses>(`${this.baseUrl}/${courseId}`);
  }
  
  updateCourse(courseId:number, courses:Courses):Observable<object>{
    return this.httpClient.put<Courses>(`${this.baseUrl}/${courseId}`,courses);
  }
}
