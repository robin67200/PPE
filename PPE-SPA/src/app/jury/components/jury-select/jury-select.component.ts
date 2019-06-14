import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Jury } from '../../models/jury';
import { JuryService } from '../../services/jury.service';

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
