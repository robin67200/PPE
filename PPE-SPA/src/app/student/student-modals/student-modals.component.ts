import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { BsModalRef } from 'ngx-bootstrap';
export interface StudentModel {
  title: string;
  message: string;
}

@Component({
  selector: 'app-student-modals',
  templateUrl: './student-modals.component.html',
  styleUrls: ['./student-modals.component.css'],
})
export class StudentModalsComponent implements OnInit {

  closeBtnName: string;

  constructor(
    private router: Router,
    private service: StudentService,
    public bsModalRef: BsModalRef,
  ) { }

  ngOnInit() {
  }

  deleteStudent(id: number) {
    this.service.deleteStudentById(id).subscribe(res => {
      this.router.navigate(['/students/list']);
      window.location.reload();
    });
  }

}
