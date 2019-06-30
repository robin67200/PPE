import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { E6Service } from '../services/E6.service';
import { E6 } from '../models/E6';

@Component({
  selector: 'app-E6-modal',
  templateUrl: './E6-modal.component.html',
  styleUrls: ['./E6-modal.component.css']
})
export class E6ModalComponent implements OnInit {

  e6: E6;
  closeBtnName: string;

  constructor(
    private service: E6Service,
    private router: Router,
    public bsModalRef: BsModalRef,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
  }

  deleteE6(id: number) {
    this.service.deleteE6ById(id).subscribe(res => {
      this.router.navigate(['/e6s/list']);
      this.alertify.error('Supression réussie');
      window.location.reload();
    });
  }

}
