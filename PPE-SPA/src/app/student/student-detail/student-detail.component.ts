import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { StudentService } from '../services/student.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { StudentModalsComponent } from '../student-modals/student-modals.component';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  id: number;
  student: Student = new Student();

  constructor(
    route: ActivatedRoute,
    private service: StudentService,
    private router: Router,
    public modals: SimpleModalService
    ) {
      route.params.forEach((params: Params) => {
        if (params.id != null) {
          this.id = +params.id;
        }
      });
     }

  ngOnInit() {
    this.service.getStudentById(this.id).subscribe(res => {
      this.student = res;
    });
  }

  deleteStudent() {
    this.modals
      .addModal(StudentModalsComponent, {
        title: 'Supprimer cet étudiant',
        message: 'Etes vous sûr ?'
      })
      .subscribe(result => {
        if (result) {
          this.service.deleteStudentById(this.id).subscribe(res => {
            this.router.navigate(['students/list']);
          });
        }
      });
  }

}
