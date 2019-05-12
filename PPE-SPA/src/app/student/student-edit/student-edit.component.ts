import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  hasError = false;
  errorMessage: string;
  id: number;
  editStudent: FormGroup;
  student = new Student('', '', '', '', '', '');

  constructor(
    fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    route: ActivatedRoute,
    private service: StudentService
  ) {
    this.editStudent = fb.group({
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
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
  }

  get name() {return this.editStudent.get('name'); }
  get firstName() {return this.editStudent.get('firstName'); }
  get mail() {return this.editStudent.get('mail'); }
  get section() {return this.editStudent.get('section'); }
  get matiere() {return this.editStudent.get('matiere'); }
  get evaluation() {return this.editStudent.get('evaluation'); }


  ngOnInit() {
    this.service.getStudentById(this.id).subscribe(res => {
      this.editStudent.patchValue(res);
    });
  }

  edit() {
    if (this.editStudent.valid) {
      const newStudent = new Student('', '', '', '', '', '');
      newStudent.name = this.editStudent.value.name;
      newStudent.firstName = this.editStudent.value.firstName;
      newStudent.mail = this.editStudent.value.mail;
      newStudent.section = this.editStudent.value.section;
      newStudent.matiere = this.editStudent.value.matiere;
      newStudent.evaluation = this.editStudent.value.evaluation;
      this.service.putStudent(this.id, newStudent).subscribe(res => {
        this.router.navigate(['/students/detail/' + this.id]);
      });
    } else {
      this.hasError = true;
      this.errorMessage = 'Formulaire incomplet : Veuillez remplir tous les champs';
    }
  }



}
