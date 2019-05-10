import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: any;

  constructor( private service: StudentService) { }

  ngOnInit() {
    this.service.getStudents().subscribe(
      response => {
        this.students = response;
      },
      error => {
        console.log(error);
      }
    );
  }


}
