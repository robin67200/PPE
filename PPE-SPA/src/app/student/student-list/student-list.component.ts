import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { StudentModalsComponent } from '../student-modals/student-modals.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: any;
  bsModalRef: BsModalRef;
  student: Student;

  constructor(
    private service: StudentService,
    private modalService: BsModalService,
    ) { }

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

  deleteStudent(student: Student) {
    const initialState = {
      student
    };
    this.bsModalRef = this.modalService.show(StudentModalsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }


}
