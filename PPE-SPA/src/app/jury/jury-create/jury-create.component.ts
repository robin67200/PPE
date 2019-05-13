import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { JuryService } from '../services/jury.service';
import { Jury } from '../models/jury';

@Component({
  selector: 'app-jury-create',
  templateUrl: './jury-create.component.html',
  styleUrls: ['./jury-create.component.css']
})
export class JuryCreateComponent implements OnInit {
  createJury: FormGroup;
  hasError = false;
  errorMessage: string;

  constructor(
    private http: HttpClient,
    fb: FormBuilder,
    private router: Router,
    private service: JuryService
  ) {
    this.createJury = fb.group({
      teacher1: ['', [Validators.required]],
      teacher2: ['', [Validators.required]],
      teacher3: ['', [Validators.required]],
    });
  }

get teacher1() {return this.createJury.get('teacher1'); }
get teacher2() {return this.createJury.get('teacher2'); }
get teacher3() {return this.createJury.get('teacher3'); }


  ngOnInit() {
  }

Save() {
  if (this.createJury.valid) {
    const newJury = new Jury('', '', '');
    newJury.teacher1 = this.createJury.value.teacher1;
    newJury.teacher2 = this.createJury.value.teacher2;
    newJury.teacher3 = this.createJury.value.teacher3;
    this.service.postJury(newJury).subscribe(res => {
      this.router.navigate(['/jurys']);
    });
  } else {
    this.hasError = true;
    this.errorMessage = 'Formulaire incomplet';
  }
}
}
