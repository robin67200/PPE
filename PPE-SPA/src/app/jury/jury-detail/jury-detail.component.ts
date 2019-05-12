import { Component, OnInit } from '@angular/core';
import { Jury } from '../models/jury';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { JuryService } from '../services/jury.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { JuryModalsComponent } from '../jury-modals/jury-modals.component';

@Component({
  selector: 'app-jury-detail',
  templateUrl: './jury-detail.component.html',
  styleUrls: ['./jury-detail.component.css']
})
export class JuryDetailComponent implements OnInit {

  id: number;
  jury: Jury = new Jury();

  constructor(
    route: ActivatedRoute,
    private service: JuryService,
    private router: Router,
    public modals: SimpleModalService

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
  deleteJury() {
    this.modals
      .addModal(JuryModalsComponent, {
        title: 'Supprimer ce Jury',
        message: 'Etes vous sûr ?'
      })
      .subscribe(result => {
        if (result) {
          this.service.deleteJuryById(this.id).subscribe(res => {
            this.router.navigate(['jurys/list']);
          });
        }
      });
  }

}
