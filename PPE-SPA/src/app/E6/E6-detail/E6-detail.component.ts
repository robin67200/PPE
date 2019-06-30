import { AlertifyService } from 'src/app/_services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { E6 } from '../models/E6';
import { ActivatedRoute, Params } from '@angular/router';
import { E6Service } from '../services/E6.service';
import { StudentService } from 'src/app/student/services/student.service';
import { Student } from 'src/app/student/models/student';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-E6-detail',
  templateUrl: './E6-detail.component.html',
  styleUrls: ['./E6-detail.component.css']
})
export class E6DetailComponent implements OnInit {

  id: number;
  e6: E6 = new E6(new Date(), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  student: Student = new Student('', '', '', '', '', '');

  constructor(
    route: ActivatedRoute,
    private service: E6Service,
    private studentService: StudentService,
    private modalService: BsModalService,
    private alertify: AlertifyService
  ) {
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
  }

  ngOnInit() {
    this.service.getE6ById(this.id).subscribe(res => {
      this.e6 = res;
      this.studentService.getStudentById(res.etudiantId).subscribe(student => {
        this.student = student;
      });
    });
  }

}
