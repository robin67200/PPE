import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Evaluation } from '../models/evalutation';
import { Note } from '../models/Note';
import { Critere } from '../models/Critere';
import { Phase } from '../models/Phase';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GridService } from '../service/grid.service';
import { Student } from 'src/app/student/models/student';

@Component({
  selector: 'app-grid-create',
  templateUrl: './grid-create.component.html',
  styleUrls: ['./grid-create.component.css']
})
export class GridCreateComponent implements OnInit {

  createEvaluation: FormGroup;
  evaluation = new Evaluation(new Date(), 0, 0);
  note = new Note(0, 0, 0);
  critere = new Critere('', 0, 0);
  phase = new Phase('');
  id: number;
  student: Student = new Student('', '', '', '', '', '');
  phases: any;
  criteres: any;

  constructor(
    route: ActivatedRoute,
    private router: Router,
    fb: FormBuilder,
    private service: GridService,
  ) {
    this.createEvaluation = fb.group({
      EtudiantId: [0, Validators.required],
      JuryId: [0, Validators.required],
      date: [new Date(), Validators.required],
      phaseLabel1: ['', Validators.required],
      critereLabel1: ['', Validators.required],
      typeNote1: [0 , Validators.required],
      critereLabel2: ['', Validators.required],
      typeNote2: [0 , Validators.required],
      critereLabel3: ['', Validators.required],
      typeNote3: [0 , Validators.required],
      critereLabel4: ['', Validators.required],
      typeNote4: [0 , Validators.required],
      phaseLabel2: ['', Validators.required],
      critereLabelA: ['', Validators.required],
      typeNoteA: [0 , Validators.required],
      critereLabelB: ['', Validators.required],
      typeNoteB: [0 , Validators.required],
      critereLabelC: ['', Validators.required],
      typeNoteC: [0 , Validators.required],
      critereLabelD: ['', Validators.required],
      typeNoteD: [0 , Validators.required],
      critereLabelE: ['', Validators.required],
      typeNoteE: [0 , Validators.required],
      critereLabelF: ['', Validators.required],
      typeNoteF: [0 , Validators.required],
      critereLabelG: ['', Validators.required],
      typeNoteG: [0 , Validators.required],
    });
  }

  ngOnInit() {
    this.service.getPhase().subscribe(res => {
      this.phases = res;
    });
  }

  save() {
    if (this.createEvaluation.valid) {
      const newEval = new Evaluation(new Date(), 0, 0);
      newEval.date = this.createEvaluation.value.date;
      newEval.EtudiantId = this.createEvaluation.value.EtudiantId;
      newEval.JuryId = this.createEvaluation.value.JuryId;
      this.service.postEvaluation(newEval).subscribe(res => {
        this.router.navigate(['/grids']);
      });
    }
  }

}
