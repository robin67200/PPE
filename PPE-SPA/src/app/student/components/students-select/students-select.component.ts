import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-students-select',
  templateUrl: './students-select.component.html',
  styleUrls: ['./students-select.component.css']
})
export class StudentsSelectComponent implements OnInit {

  @Input() form: FormGroup;
  students: Student[] = [];

  constructor(private service: StudentService) { }

  ngOnInit() {
    this.service.getStudents().subscribe(res => {
      this.students = res;
    });
  }

}
