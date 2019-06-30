import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student/models/student';
import { E6Service } from '../services/E6.service';
import { StudentService } from 'src/app/student/services/student.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { E6ModalComponent } from '../E6-modal/E6-modal.component';
import { E6 } from '../models/E6';


@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-E6-list',
  templateUrl: './E6-list.component.html',
  styleUrls: ['./E6-list.component.css']
})
export class E6ListComponent implements OnInit {

  e6s: any;
  students: Student[] = [];
  bsModalRef: BsModalRef;

  constructor(
    private service: E6Service,
    private etudiantService: StudentService,
    private modalService: BsModalService,

  ) { }

  ngOnInit() {
    this.service.getE6s().subscribe(res => {
      this.e6s = res;
      this.etudiantService.getStudents().subscribe(resp => {
        this.students = resp;
        this.e6s.forEach(e => {
          const student = this.students.find(s => s.id === e.etudiantId);
          e.etudiantName = student.name;
        });
      });
    });
  }
  deleteE6(e6: E6) {
    const initialState = {
      e6
    };
    this.bsModalRef = this.modalService.show(E6ModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
