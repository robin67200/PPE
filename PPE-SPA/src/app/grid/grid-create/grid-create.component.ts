import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Evaluation } from '../models/evalutation';
import { Note } from '../models/Note';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GridService } from '../service/grid.service';
import { Student } from 'src/app/student/models/student';
import { StudentService } from 'src/app/student/services/student.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-grid-create',
  templateUrl: './grid-create.component.html',
  styleUrls: ['./grid-create.component.css']
})
export class GridCreateComponent implements OnInit {

  sum: number;
  sumB: number;
  sumPenalite: number;
  sumNoteFinale: number;
  createEvaluation: FormGroup;
  evaluation = new Evaluation(new Date(), 0, 0, this.sum, this.sumB, this.sumNoteFinale);
  student: Student = new Student('', '', '', '', '', '');
  hasError = false;
  errorMessage: string;

  constructor(
    route: ActivatedRoute,
    private router: Router,
    fb: FormBuilder,
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

      ]),
      notePhase2: new FormControl(this.evaluation.notePhase2, [

      ]),
      resultat: new FormControl(this.evaluation.resultat, [

      ])
    });
  }

  get date() {return this.createEvaluation.get('date'); }
  get etudiantId() {return this.createEvaluation.get('EtudiantId'); }
  get juryId() {return this.createEvaluation.get('juryId'); }
  get notePhase1() {return this.createEvaluation.get('notePhase1'); }
  get notePhase2() {return this.createEvaluation.get('notePhase2'); }
  get resultat() {return this.createEvaluation.get('resultat'); }

  ngOnInit() { }


// tslint:disable-next-line: max-line-length
  calculatePhase1(premier: number, second: number, troisieme: number, quatrieme: number) {
      this.sum = +premier + +second + +troisieme + +quatrieme;
      this.sum = Math.ceil(this.sum);
  }

  calculatePhase2(premierB: number, secondB: number, troisiemeB: number, quatriemeB: number, cinquiemeB: number) {
    this.sumB = +premierB + +secondB + +troisiemeB + +quatriemeB + +cinquiemeB;
    this.sumB = Math.ceil(this.sumB);
  }

  calculatePenalite(penaliteA: number, penaliteB: number) {
    this.sumPenalite = +penaliteA + +penaliteB;
  }

  calculateNoteFinale() {
    this.sumNoteFinale = +this.sum + +this.sumB - +this.sumPenalite ;
  }

  Save() {
    if (this.createEvaluation.valid) {
      const newEval = new Evaluation(new Date(), 0, 0,  this.sum, this.sumB, this.sumNoteFinale);
      newEval.date = this.createEvaluation.value.date;
      newEval.etudiantId = this.createEvaluation.value.etudiantId;
      newEval.juryId = this.createEvaluation.value.juryId;
      newEval.notePhase1 = this.sum;
      newEval.notePhase2 = this.sumB;
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
