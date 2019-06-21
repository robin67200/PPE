import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Note } from '../../models/Note';
import { GridService } from '../../service/grid.service';

@Component({
  selector: 'app-note-select',
  templateUrl: './note-select.component.html',
  styleUrls: ['./note-select.component.css']
})
export class NoteSelectComponent implements OnInit {

  @Input() form: FormGroup;
  notes: Note[] = [];

  constructor(private service: GridService) { }

  ngOnInit() {
    this.service.getNote().subscribe(res => {
      this.notes = res;
    });
  }

}
