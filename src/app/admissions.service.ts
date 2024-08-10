import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admissions } from './admissions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmissionsService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:8080/admissions";

  getAdmissionList(): Observable<Admissions[]> {
    return this.httpClient.get<Admissions[]>(`${this.baseUrl}`);
  }

  addAdmission(admissions: Admissions): Observable<Admissions> {
    return this.httpClient.post<Admissions>(`${this.baseUrl}`, admissions);
  }

  deleteAdmission(admissionId: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${admissionId}`);
  }

  getAdmissionById(admissionId: number): Observable<Admissions> {
    return this.httpClient.get<Admissions>(`${this.baseUrl}/${admissionId}`);
  }

  updateAdmission(admissionId: number, admissions: Admissions): Observable<object> {
    return this.httpClient.put(`${this.baseUrl}/${admissionId}`, admissions);
  }

}
