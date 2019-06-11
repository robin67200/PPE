import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { GridService } from '../service/grid.service';
import { Router } from '@angular/router';
import { Evaluation } from '../models/evalutation';

@Component({
  selector: 'app-grid-modal',
  templateUrl: './grid-modal.component.html',
  styleUrls: ['./grid-modal.component.css']
})
export class GridModalComponent implements OnInit {

  evaluation: Evaluation;
  closeBtnName: string;

  constructor(
    private service: GridService,
    private router: Router,
    public bsModalRef: BsModalRef,
  ) { }

  ngOnInit() {
  }

  deleteEvaluation(id: number) {
    this.service.deleteEvaluationById(id).subscribe(res => {
      this.router.navigate(['/grids/list']);
      window.location.reload();
    });
  }

}
