import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';

@Injectable()
export class StudentService {

    constructor(private http: HttpClient) {}
      getStudents() {
        return this.http.get<Student[]>('http://localhost:5000/api/students');
      }
      getStudentById(id: number) {
        return this.http.get<Student>('http://localhost:5000/api/students/' + id);
      }
      putStudent(id: number, student: any) {
        return this.http.put<Student>('http://localhost:5000/api/students/' + id, student);
      }
      postStudent(student: Student) {
        return this.http.post<Student>('https://localhost:5001/api/students/', student);
      }
      deleteStudentById(id: number) {
        return this.http.delete<Student>('http://localhost:5000/api/students/' + id);
      }

}
