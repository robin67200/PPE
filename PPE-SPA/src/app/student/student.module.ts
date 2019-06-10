import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SimpleModalService, SimpleModalModule } from 'ngx-simple-modal';

import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentModalsComponent } from './student-modals/student-modals.component';
import { StudentsRoutingModule } from './student.routing';
import { StudentService } from './services/student.service';
import { AppShareModule } from '../share.module';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            AppShareModule,
            FormsModule,
            StudentsRoutingModule,
            SimpleModalModule.forRoot(
              { container: 'modal-container' },
              {
                closeOnEscape: false,
                closeOnClickOutside: false,
                bodyClass: 'modal-open',
                wrapperDefaultClasses: 'modal fade-anim',
                wrapperClass: 'in',
                animationDuration: 300
              }
            )],
  declarations: [
    StudentCreateComponent,
    StudentListComponent,
    StudentDetailComponent,
    StudentEditComponent,
    StudentModalsComponent
  ],
  providers: [StudentService, SimpleModalService], entryComponents: [StudentModalsComponent]
})
export class StudentsModule {}
