import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { JuryService } from '../services/jury.service';
import { BsModalRef } from 'ngx-bootstrap';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-jury-modals',
  templateUrl: './jury-modals.component.html',
  styleUrls: ['./jury-modals.component.css'],

})
export class JuryModalsComponent implements OnInit {

  closeBtnName: string;

  constructor(
    private router: Router,
    private service: JuryService,
    public bsModalRef: BsModalRef,
  ) { }

  ngOnInit() {

  }

  deleteJury(id: number) {
    this.service.deleteJuryById(id).subscribe(res => {
      this.router.navigate(['/jurys/list']);
    });
  }
}
