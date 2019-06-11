import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { GridService } from '../service/grid.service';
import { Router } from '@angular/router';
import { Evaluation } from '../models/evalutation';
import { AlertifyService } from 'src/app/_services/alertify.service';

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
    private alertify: AlertifyService
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
