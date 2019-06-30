import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { E6Service } from '../services/E6.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { E6 } from '../models/E6';
import { BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-E6-create',
  templateUrl: './E6-create.component.html',
  styleUrls: ['./E6-create.component.css']
})
export class E6CreateComponent implements OnInit {

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
  createE6: FormGroup;
  e6 = new E6(new Date(), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  hasError = false;
  errorMessage: string;
  @Output()
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(
    private router: Router,
    fb: FormBuilder,
    private service: E6Service,
    private alertify: AlertifyService
  ) {
    this.createE6 = fb.group({
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
  }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-red'
    };
  }

  // tslint:disable-next-line: max-line-length
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
    if (this.createE6.valid) {
      const newEval = new E6(new Date(), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      newEval.date = this.createE6.value.date;
      newEval.etudiantId = this.createE6.value.etudiantId;
      newEval.juryId = this.createE6.value.juryId;
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
      newEval.sommePenalite = this.sumPenalite;
      newEval.resultat = this.sumNoteFinale;
      this.service.postE6(newEval).subscribe(res => {
        this.router.navigate(['/e6s']);
      });
      this.alertify.succes('creation terminée');
    } else {
      this.hasError = true;
      this.errorMessage = 'Formulaire incomplet : Veuillez completer tous les champs';
    }
  }


}
