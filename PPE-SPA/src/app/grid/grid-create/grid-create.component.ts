import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Evaluation } from '../models/evalutation';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GridService } from '../service/grid.service';
import { Student } from 'src/app/student/models/student';
import { StudentService } from 'src/app/student/services/student.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-grid-create',
  templateUrl: './grid-create.component.html',
  styleUrls: ['./grid-create.component.css']
})
export class GridCreateComponent implements OnInit {

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
  createEvaluation: FormGroup;
  evaluation = new Evaluation(new Date(), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  student: Student = new Student('', '', '', '', '', '');
  hasError = false;
  errorMessage: string;
  @Output()
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(
    route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private service: GridService,
    private alertify: AlertifyService
  ) {
    this.createEvaluation = fb.group({
      date: new FormControl(this.evaluation.date, [
        Validators.required
      ]),
      etudiantId: new FormControl(this.evaluation.etudiantId, [
        Validators.required
      ]),
      juryId: new FormControl(this.evaluation.juryId, [
        Validators.required
      ]),
      c1: new FormControl(this.evaluation.c1, [

      ]),
      c2: new FormControl(this.evaluation.c2, [

      ]),
      c3: new FormControl(this.evaluation.c3, [

      ]),
      c4: new FormControl(this.evaluation.c4, [

      ]),
      notePhase1: new FormControl(this.evaluation.notePhase1, [

      ]),
      c5: new FormControl(this.evaluation.c5, [

      ]),
      c6: new FormControl(this.evaluation.c6, [

      ]),
      c7: new FormControl(this.evaluation.c7, [

      ]),
      cr8: new FormControl(this.evaluation.c7, [

      ]),
      c9: new FormControl(this.evaluation.c7, [

      ]),
      notePhase2: new FormControl(this.evaluation.notePhase2, [

      ]),
      p1: new FormControl(this.evaluation.p1, [

      ]),
      p2: new FormControl(this.evaluation.p2, [

      ]),
      sommePenalite: new FormControl(this.evaluation.penaliteSomme, [

      ]),
      resultat: new FormControl(this.evaluation.resultat, [

      ])
    });
  }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-red'
    };
  }

  calculatePhase1(premier: number, second: number, troisieme: number, quatrieme: number) {
    this.sum = +premier + +second + +troisieme + +quatrieme;
    this.cr1 = premier;
    this.cr2 = second;
    this.cr3 = troisieme;
    this.cr4 = quatrieme;
    this.sum = Math.round(this.sum * 100) / 100;
  }

  calculatePhase2(premierB: number, secondB: number, troisiemeB: number, quatriemeB: number, cinquiemeB: number) {
    this.sumB = +premierB + +secondB + +troisiemeB + +quatriemeB + +cinquiemeB ;
    this.cr5 = premierB;
    this.cr6 = secondB;
    this.cr7 = troisiemeB;
    this.cr8 = quatriemeB;
    this.cr9 = cinquiemeB;
    this.sumB = Math.round(this.sumB * 100) / 100;
  }

  calculatePenalite(penaliteA: number, penaliteB: number) {
    this.pen1 = penaliteA;
    this.pen2 = penaliteB;
    this.sumPenalite = +penaliteA + +penaliteB;
  }

  calculateNoteFinale() {
    this.sumNoteFinale = +this.sum + +this.sumB - +this.sumPenalite;
    this.sumNoteFinale = Math.round(this.sumNoteFinale * 100) / 100;
  }

  Save() {
    if (this.createEvaluation.valid) {
      const newEval = new Evaluation(new Date(), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      newEval.date = this.createEvaluation.value.date;
      newEval.etudiantId = this.createEvaluation.value.etudiantId;
      newEval.juryId = this.createEvaluation.value.juryId;
      newEval.c1 = this.cr1;
      newEval.c2 = this.cr2;
      newEval.c3 = this.cr3;
      newEval.c4 = this.cr4;
      newEval.notePhase1 = this.sum;
      newEval.c5 = this.cr5;
      newEval.c6 = this.cr6;
      newEval.c7 = this.cr7;
      newEval.c8 = this.cr8;
      newEval.c9 = this.cr9;
      newEval.notePhase2 = this.sumB;
      newEval.p1 = this.pen1;
      newEval.p2 = this.pen2;
      newEval.penaliteSomme = this.sumPenalite;
      newEval.resultat = this.sumNoteFinale;
      this.service.postEvaluation(newEval).subscribe(res => {
        this.router.navigate(['/grids']);
      });
      this.alertify.succes('creation terminée');
    } else {
      this.hasError = true;
      this.errorMessage = 'Formulaire incomplet : Veuillez completer tous les champs';
    }
  }


}
