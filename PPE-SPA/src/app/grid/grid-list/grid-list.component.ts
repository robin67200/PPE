import { Component, OnInit } from '@angular/core';
import { GridService } from '../service/grid.service';
import { StudentService } from 'src/app/student/services/student.service';
import { Evaluation } from '../models/evalutation';
import { Student } from 'src/app/student/models/student';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { GridModalComponent } from '../grid-modal/grid-modal.component';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {

  evaluations: any;
  students: Student[] = [];
  bsModalRef: BsModalRef;

  constructor(
    private service: GridService,
    private etudiantService: StudentService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.service.getEvaluation().subscribe(response => {
      this.evaluations = response;
      this.etudiantService.getStudents().subscribe(resp => {
        this.students = resp;
        this.evaluations.forEach(e => {
          const student = this.students.find(s => s.id === e.etudiantId);
          e.etudiantName = student.name;
        });
      });
    });
  }

  deleteEvaluation(evaluation: Evaluation) {
    const initialState = {
      evaluation
    };
    this.bsModalRef = this.modalService.show(GridModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }


}
