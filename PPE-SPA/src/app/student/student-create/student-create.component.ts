import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  constructor(
    private http: HttpClient,
    fb: FormBuilder,
    private router: Router,
    private service: StudentService
  ) {
    this.createStudent = fb.group({
      name: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      mail: ['', [Validators.required]],
      section: ['', [Validators.required]],
      matiere: ['', [Validators.required]],
      styleEval: ['', [Validators.required]],

    });
  }

  get name() {return this.createStudent.get('name'); }
  get firstName() {return this.createStudent.get('firstName'); }
  get mail() {return this.createStudent.get('mail'); }
  get section() {return this.createStudent.get('section'); }
  get matiere() {return this.createStudent.get('matiere'); }
  get styleEval() {return this.createStudent.get('styleEval'); }

  ngOnInit() {
  }

  Save() {
    if (this.createStudent.valid) {
      const newStudent = new Student();
      newStudent.name = this.createStudent.value.name;
      newStudent.firstName = this.createStudent.value.firstName;
      newStudent.mail = this.createStudent.value.mail;
      newStudent.section = this.createStudent.value.section;
      newStudent.matiere = this.createStudent.value.matiere;
      newStudent.styleEval = this.createStudent.value.StyleEval;
      this.service.postStudent(newStudent).subscribe(res => {
        this.router.navigate(['/students']);
      });
    } else {
      this.hasError = true;
      this.errorMessage = 'Formulaire incomplet : Veuillez remplir tous les champs';
    }
  }

}
