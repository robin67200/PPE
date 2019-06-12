import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { StudentService } from '../services/student.service';
import { StudentModalsComponent } from '../student-modals/student-modals.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  id: number;
  student: Student = new Student('', '', '', '', '', '');
  bsModalRef: BsModalRef;

  constructor(
    route: ActivatedRoute,
    private service: StudentService,
    private modalService: BsModalService,
    ) {
      route.params.forEach((params: Params) => {
        if (params.id != null) {
          this.id = +params.id;
        }
      });
     }



  ngOnInit() {
    this.service.getStudentById(this.id).subscribe(res => {
      this.student = res;
    });
  }
  deleteStudent(student: Student) {
    const initialState = {
      student
    };
    this.bsModalRef = this.modalService.show(StudentModalsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }


}
