import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { E6 } from '../models/E6';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { E6Service } from '../services/E6.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-E6-edit',
  templateUrl: './E6-edit.component.html',
  styleUrls: ['./E6-edit.component.css']
})
export class E6EditComponent implements OnInit {

  cr1: number;
  cr2: number;
  cr3: number;
  cr4: number;
  sum: number;
  cr5: number;
  cr6: number;
  cr7: number;
  sumB: number;
  pen1: number;
  pen2: number;
  sumPenalite: number;
  sumNoteFinale: number;
  id: number;
  editE6: FormGroup;
  e6 = new E6(new Date(), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  hasError = false;
  errorMessage: string;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private service: E6Service,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {
    this.editE6 = fb.group({
      date: new FormControl(this.e6.date, [
        Validators.required
      ]),
      etudiantId: new FormControl(this.e6.etudiantId, [
        Validators.required
      ]),
      juryId: new FormControl(this.e6.juryId, [
        Validators.required
      ]),
      c1: new FormControl(this.e6.c1, [

      ]),
      c2: new FormControl(this.e6.c2, [

      ]),
      c3: new FormControl(this.e6.c3, [

      ]),
      c4: new FormControl(this.e6.c4, [

      ]),
      notePhase1: new FormControl(this.e6.notePhase1, [

      ]),
      c5: new FormControl(this.e6.c5, [

      ]),
      c6: new FormControl(this.e6.c6, [

      ]),
      c7: new FormControl(this.e6.c7, [

      ]),
      notePhase2: new FormControl(this.e6.notePhase2, [

      ]),
      p1: new FormControl(this.e6.p1, [

      ]),
      p2: new FormControl(this.e6.p2, [

      ]),
      resultat: new FormControl(this.e6.resultat, [

      ])
    });
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
  }

  ngOnInit() {
    this.service.getE6ById(this.id).subscribe(res => {
      this.editE6.patchValue(res);
    });
  }

  calculatePhase1(premier: number, second: number, troisieme: number, quatrieme: number) {
    this.sum = +premier + +second + +troisieme + +quatrieme;
    this.cr1 = premier;
    this.cr2 = second;
    this.cr3 = troisieme;
    this.cr4 = quatrieme;
    this.sum = Math.round(this.sum * 100) / 100;
  }

  calculatePhase2(premierB: number, secondB: number, troisiemeB: number) {
    this.sumB = +premierB + +secondB + +troisiemeB;
    this.cr5 = premierB;
    this.cr6 = secondB;
    this.cr7 = troisiemeB;
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
    if (this.editE6.valid) {
      const newEval = new E6(new Date(), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      newEval.date = this.editE6.value.date;
      newEval.etudiantId = this.editE6.value.etudiantId;
      newEval.juryId = this.editE6.value.juryId;
      newEval.c1 = this.cr1;
      newEval.c2 = this.cr2;
      newEval.c3 = this.cr3;
      newEval.c4 = this.cr4;
      newEval.notePhase1 = this.sum;
      newEval.c5 = this.cr5;
      newEval.c6 = this.cr6;
      newEval.c7 = this.cr7;
      newEval.notePhase2 = this.sumB;
      newEval.p1 = this.pen1;
      newEval.p2 = this.pen2;
      newEval.resultat = this.sumNoteFinale;
      this.service.putE6(this.id, newEval).subscribe(res => {
        this.router.navigate(['/e6s']);
      });
      this.alertify.succes('creation terminée');
    } else {
      this.hasError = true;
      this.errorMessage = 'Formulaire incomplet : Veuillez completer tous les champs';
    }
  }

}
