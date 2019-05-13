import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { StudentService } from '../services/student.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  createStudent: FormGroup;
  hasError = false;
  errorMessage: string;
  student = new Student('', '', '', '', '', '');

  constructor(
    private http: HttpClient,
    fb: FormBuilder,
    private router: Router,
    private service: StudentService
  ) {
    this.createStudent = fb.group({
      name: new FormControl(this.student.name, [
        Validators.required
      ]),
      firstName: new FormControl(this.student.firstName, [
        Validators.required
      ]),
      mail: new FormControl(this.student.mail, [
        Validators.required
      ]),
      section: new FormControl(this.student.section, [
        Validators.required
      ]),
      matiere: new FormControl(this.student.matiere, [
        Validators.required
      ]),
      evaluation: new FormControl(this.student.evaluation, [
        Validators.required
      ]),
    });
  }

  get name() {return this.createStudent.get('name'); }
  get firstName() {return this.createStudent.get('firstName'); }
  get mail() {return this.createStudent.get('mail'); }
  get section() {return this.createStudent.get('section'); }
  get matiere() {return this.createStudent.get('matiere'); }
  get evaluation() {return this.createStudent.get('evaluation'); }

  ngOnInit() {
  }

  Save() {
    if (this.createStudent.valid) {
      const newStudent = new Student('', '', '', '', '', '');
      newStudent.name = this.createStudent.value.name;
      newStudent.firstName = this.createStudent.value.firstName;
      newStudent.mail = this.createStudent.value.mail;
      newStudent.section = this.createStudent.value.section;
      newStudent.matiere = this.createStudent.value.matiere;
      newStudent.evaluation = this.createStudent.value.evaluation;
      this.service.postStudent(newStudent).subscribe(res => {
        this.router.navigate(['/students']);
      });
    } else {
      this.hasError = true;
      this.errorMessage = 'Formulaire incomplet : Veuillez remplir tous les champs';
    }
  }

}
