import { Component, OnInit } from '@angular/core';
import { Jury } from '../models/jury';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { JuryService } from '../services/jury.service';
import { JuryModalsComponent } from '../jury-modals/jury-modals.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-jury-detail',
  templateUrl: './jury-detail.component.html',
  styleUrls: ['./jury-detail.component.css']
})
export class JuryDetailComponent implements OnInit {

  id: number;
  jury: Jury = new Jury('', '', '');
  bsModalRef: BsModalRef;

  constructor(
    route: ActivatedRoute,
    private service: JuryService,
    private modalService: BsModalService,

  ) {
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
   }

  ngOnInit() {
    this.service.getJuryById(this.id).subscribe(res => {
      this.jury = res;
    });
  }
  deleteJury(jury: Jury) {
    const initialState = {
      jury
    };
    this.bsModalRef = this.modalService.show(JuryModalsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
