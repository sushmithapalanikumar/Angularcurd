import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  readonly baseUrl = 'http://localhost:5070/api/';

  constructor(private http: HttpClient) { }

  // Department
  getDepartmentList(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'department');
  }

  addDepartment(dept: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.baseUrl + 'department', dept, httpOptions);
  }

  updateDepartment(dept: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.baseUrl + 'department/'+ dept.DepartmentId, dept, httpOptions);
  }

  deleteDepartment(deptId: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.baseUrl + 'department/' + deptId, httpOptions);
  }

  // Student
  getStudentList(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'student');
  }

  addStudent(stud: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.baseUrl + 'student', stud, httpOptions);
  }

  updateStudent(stud: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.baseUrl + 'student/'+ stud.StudentId, stud, httpOptions);
  }

  deleteStudent(studId: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.baseUrl + 'student/' + studId, httpOptions);
  }

  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'student/GetAllDepartmentNames');
  }
}
