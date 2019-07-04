import { Evaluation } from './../models/evalutation';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ActivatedRoute, Params } from '@angular/router';
import { GridService } from '../service/grid.service';
import { GridModalComponent } from '../grid-modal/grid-modal.component';
import { StudentService } from 'src/app/student/services/student.service';
import { Student } from 'src/app/student/models/student';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ExportAsService, ExportAsConfig, SupportedExtensions } from 'ngx-export-as';

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
  p1: number;
  p2: number;
  sommePenalite: number;
  sumNoteFinale: number;
  id: number;
  evaluation = new Evaluation(new Date(), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  bsModalRef: BsModalRef;
  student: Student = new Student('', '', '', '', '', '');

  config: ExportAsConfig = {
    type: 'pdf',
    elementId: 'pdfgrille',
    options: {
        orientation: 'portrait',
        margins: {
          bottom: '50'
        }
      }
    };

    constructor(
    route: ActivatedRoute,
    private service: GridService,
    private modalService: BsModalService,
    private studentService: StudentService,
    private alertify: AlertifyService,
    private exportAsService: ExportAsService


  ) {  route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    }); }

  ngOnInit() {
    this.service.getEvaluationById(this.id).subscribe(res => {
      this.evaluation = res;
      this.studentService.getStudentById(res.etudiantId).subscribe(student => {
        this.student = student;
  });
});
}

   export() {
    window.print();
  }


  deleteEvaluation(evaluation: Evaluation) {
    const initialState = {
      evaluation
    };
    this.bsModalRef = this.modalService.show(GridModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
