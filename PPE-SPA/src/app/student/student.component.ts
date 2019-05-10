import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
>>>>>>> 5f084637a956c76d98ecd5aa527c69bb94993b95

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

<<<<<<< HEAD
  students: any;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.http.get('http://localhost:5000/api/students').subscribe(response => {
      this.students = response
    }, error => {
      console.log(error);
    })
=======
  constructor() { }

  ngOnInit() {
>>>>>>> 5f084637a956c76d98ecd5aa527c69bb94993b95
  }

}
