import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentModalsComponent } from './student-modals/student-modals.component';
import { StudentsRoutingModule } from './student.routing';
import { StudentService } from './services/student.service';
import { AppShareModule } from '../share.module';
import { ModalModule } from 'ngx-bootstrap';
import { StudentsSelectComponent } from './components/students-select/students-select.component';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            AppShareModule,
            FormsModule,
            StudentsRoutingModule,
            ModalModule.forRoot()],
  declarations: [
    StudentCreateComponent,
    StudentListComponent,
    StudentDetailComponent,
    StudentEditComponent,
    StudentModalsComponent,
    StudentsSelectComponent
  ],
  providers: [StudentService],
  entryComponents: [StudentModalsComponent],
  exports: [StudentsSelectComponent, StudentModalsComponent]
})
export class StudentsModule {}
