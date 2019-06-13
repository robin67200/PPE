import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Evaluation } from '../models/evalutation';
import { Note } from '../models/Note';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GridService } from '../service/grid.service';
import { Student } from 'src/app/student/models/student';
import { StudentService } from 'src/app/student/services/student.service';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-grid-create',
  templateUrl: './grid-create.component.html',
  styleUrls: ['./grid-create.component.css']
})
export class GridCreateComponent implements OnInit {

  sum: number;
  createEvaluation: FormGroup;
  evaluation = new Evaluation(new Date(), 0, 0, '', '', '');
  student: Student = new Student('', '', '', '', '', '');

  sumB: number;
  sumPenalite: number;
  sumNoteFinale: number;
  bsConfig: Partial<BsDatepickerConfig>;
  hasError = false;
  errorMessage: string;

  constructor(
    route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private service: GridService,
    private studentService: StudentService,
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
      notePhase1: new FormControl(this.evaluation.notePhase1, [
        Validators.required
      ]),
      notePhase2: new FormControl(this.evaluation.notePhase2, [
        Validators.required
      ]),
      resultat: new FormControl(this.evaluation.resultat, [
        Validators.required
      ])
    });
  }

  get date() {return this.createEvaluation.get('date'); }
  get etudiantId() {return this.createEvaluation.get('EtudiantId'); }
  get juryId() {return this.createEvaluation.get('juryId'); }
  get notePhase1() {return this.createEvaluation.get('notePhase1'); }
  get notePhase2() {return this.createEvaluation.get('notePhase2'); }
  get resultat() {return this.createEvaluation.get('resultat'); }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-red'
    }
   }


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

  Save() {
    if (this.createEvaluation.valid) {
      const newEval = new Evaluation(new Date(), 0, 0, '', '', '');
      newEval.date = this.createEvaluation.value.date;
      newEval.etudiantId = this.createEvaluation.value.etudiantId;
      newEval.juryId = this.createEvaluation.value.juryId;
      newEval.notePhase1 = this.createEvaluation.value.notePhase1;
      newEval.notePhase2 = this.createEvaluation.value.notePhase2;
      newEval.resultat = this.createEvaluation.value.resultat;
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
