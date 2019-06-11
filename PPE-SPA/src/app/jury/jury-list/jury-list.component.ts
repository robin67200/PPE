import { Component, OnInit } from '@angular/core';
import { JuryService } from '../services/jury.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Jury } from '../models/jury';
import { JuryModalsComponent } from '../jury-modals/jury-modals.component';


@Component({
  selector: 'app-jury-list',
  templateUrl: './jury-list.component.html',
  styleUrls: ['./jury-list.component.css']
})
export class JuryListComponent implements OnInit {

  jurys: any;
  bsModalRef: BsModalRef;
  jury: Jury;

  constructor(
    private service: JuryService,
    private modalService: BsModalService,
    ) { }

  ngOnInit() {
    this.service.getJury().subscribe(
      response => {
        this.jurys = response;
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteJury(jury: Jury) {
    const initialState = {
      jury
    };
    this.bsModalRef = this.modalService.show(JuryModalsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}

