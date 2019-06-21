import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Evaluation } from '../models/evalutation';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GridService } from '../service/grid.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-grid-edit',
  templateUrl: './grid-edit.component.html',
  styleUrls: ['./grid-edit.component.css']
})
export class GridEditComponent implements OnInit {

  hasError = false;
  errorMessage: string;
  id: number;
  editEval: FormGroup;
  evaluation = new Evaluation(new Date(), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

  constructor(
    fb: FormBuilder,
    private router: Router,
    route: ActivatedRoute,
    private service: GridService,
    private alertify: AlertifyService
  ) {
    this.editEval = fb.group({
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
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
  }

  ngOnInit() {
    this.service.getEvaluationById(this.id).subscribe(res => {
      this.editEval.patchValue(res);
    });
  }


  Save() {
    if (this.editEval.valid) {
      const newEval = new Evaluation(new Date(), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      newEval.date = this.editEval.value.date;
      newEval.etudiantId = this.editEval.value.etudiantId;
      newEval.juryId = this.editEval.value.juryId;
      newEval.notePhase1 = this.editEval.value.notePhase1;
      newEval.notePhase2 = this.editEval.value.notePhase2;
      newEval.resultat = this.editEval.value.resultat;
      this.service.putEvaluation(this.id, newEval).subscribe(res => {
        this.router.navigate(['/grids']);
      });
      this.alertify.succes('creation terminée');
    } else {
      this.hasError = true;
      this.errorMessage = 'Formulaire incomplet : Veuillez completer tous les champs';
    }
  }

}
