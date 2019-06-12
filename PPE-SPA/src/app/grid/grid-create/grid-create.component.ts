import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Evaluation } from '../models/evalutation';
import { Note } from '../models/Note';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GridService } from '../service/grid.service';
import { Student } from 'src/app/student/models/student';
import { StudentService } from 'src/app/student/services/student.service';

@Component({
  selector: 'app-grid-create',
  templateUrl: './grid-create.component.html',
  styleUrls: ['./grid-create.component.css']
})
export class GridCreateComponent implements OnInit {

  createEvaluation: FormGroup;
  evaluation = new Evaluation(new Date(), 0, 0);
  note = new Note(0, 0, 0);
  student: Student = new Student('', '', '', '', '', '');
  sum: number;
  sumB: number;
  sumPenalite: number;
  sumNoteFinale: number;

  constructor(
    route: ActivatedRoute,
    private router: Router,
    fb: FormBuilder,
    private service: GridService,
    private studentService: StudentService
  ) { }

  ngOnInit() { }


// tslint:disable-next-line: max-line-length
  calculatePhase1(premier: number, second: number, troisieme: number, quatrieme: number) {
      this.sum = +premier + +second + +troisieme + +quatrieme;
  }

  calculatePhase2(premierB: number, secondB: number, troisiemeB: number, quatriemeB: number, cinquiemeB: number) {
    this.sumB = +premierB + +secondB + +troisiemeB + +quatriemeB + +cinquiemeB;
  }

  calculatePenalite(penaliteA: number, penaliteB: number) {
    this.sumPenalite = +penaliteA + +penaliteB;
  }

  calculateNoteFinale() {
    this.sumNoteFinale = +this.sum + +this.sumB - +this.sumPenalite ;
  }


}
