import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Jury } from '../../models/jury';
import { JuryService } from '../../services/jury.service';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-jury-select',
  templateUrl: './jury-select.component.html',
  styleUrls: ['./jury-select.component.css']
})
export class JurySelectComponent implements OnInit {

  @Input() form: FormGroup;
  jurys: Jury[] = [];

  constructor(private service: JuryService) { }

  ngOnInit() {
    this.service.getJury().subscribe(res => {
      this.jurys = res;
    });
  }
}
