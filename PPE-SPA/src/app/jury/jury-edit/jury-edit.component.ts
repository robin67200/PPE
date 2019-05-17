import { JuryService } from '../services/jury.service';
import { Jury } from '../models/jury';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-jury-edit',
  templateUrl: './jury-edit.component.html',
  styleUrls: ['./jury-edit.component.css']
})
export class JuryEditComponent implements OnInit {

  hasError = false;
  errorMessage: string;
  id: number;
  editJury: FormGroup;
  jury = new Jury('', '', '');

  constructor(
    fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    route: ActivatedRoute,
    private service: JuryService,
    private alertifyService: AlertifyService
  ) {
    this.editJury = fb.group({
      teacher1: new FormControl(this.jury.teacher1, [
        Validators.required
      ]),
      teacher2: new FormControl(this.jury.teacher2, [
        Validators.required
      ]),
      teacher3: new FormControl(this.jury.teacher3, [
        Validators.required
      ]),
    });
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
  }

  get teacher1() {return this.editJury.get('teacher1'); }
  get teacher2() {return this.editJury.get('teacher2'); }
  get teacher3() {return this.editJury.get('teacher3'); }



  ngOnInit() {
    this.service.getJuryById(this.id).subscribe(res => {
      this.editJury.patchValue(res);
    });
  }

  edit() {
    if (this.editJury.valid) {
      const newjury = new Jury('', '', '');
      newjury.teacher1 = this.editJury.value.teacher1;
      newjury.teacher2 = this.editJury.value.teacher2;
      newjury.teacher3 = this.editJury.value.teacher3;
      this.service.putJury(this.id, newjury).subscribe(res => {
        this.router.navigate(['/jurys/detail/' + this.id]);
      });
      this.alertifyService.succes('jury modifé');
    } else {
      this.hasError = true;
      this.errorMessage = 'Formulaire incomplet : Veuillez remplir tous les champs';
    }
  }



}
