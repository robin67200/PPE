import { Component, OnInit } from '@angular/core';
import { JuryService } from '../services/jury.service';

@Component({
  selector: 'app-jury-list',
  templateUrl: './jury-list.component.html',
  styleUrls: ['./jury-list.component.css']
})
export class JuryListComponent implements OnInit {

  jurys: any;

  constructor( private service: JuryService) { }

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


}

