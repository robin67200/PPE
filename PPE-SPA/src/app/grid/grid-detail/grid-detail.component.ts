import { Component, OnInit } from '@angular/core';
import { Evaluation } from '../models/evalutation';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ActivatedRoute, Params } from '@angular/router';
import { GridService } from '../service/grid.service';
import { GridModalComponent } from '../grid-modal/grid-modal.component';
import { StudentService } from 'src/app/student/services/student.service';
import { Student } from 'src/app/student/models/student';

@Component({
  selector: 'app-grid-detail',
  templateUrl: './grid-detail.component.html',
  styleUrls: ['./grid-detail.component.css']
})
export class GridDetailComponent implements OnInit {

  cr1: number;
  cr2: number;
  cr3: number;
  cr4: number;
  sum: number;
  cr5: number;
  cr6: number;
  cr7: number;
  cr8: number;
  cr9: number;
  sumB: number;
  pen1: number;
  pen2: number;
  sumPenalite: number;
  sumNoteFinale: number;
  id: number;
  evaluation = new Evaluation(new Date(), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  bsModalRef: BsModalRef;
  students: Student[] = [];

    constructor(
    route: ActivatedRoute,
    private service: GridService,
    private modalService: BsModalService,
    private etudiantService: StudentService,


  ) {  route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    }); }

  ngOnInit() {
    this.service.getEvaluationById(this.id).subscribe(response => {
      this.evaluation = response;
/*
      this.etudiantService.getStudents().subscribe(resp => {
        this.students = resp;
        this.evaluation.forEach(e => {
          const student = this.students.find(s => s.id === e.etudiantId);
          e.etudiantName = student.name;
          alert('HHHHHHHHHHHHHHHHHEEEEEEEEEEEEEEEEEEe')
        });
    });
  });*/
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
