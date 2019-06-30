import { E6ModalComponent } from './E6-modal/E6-modal.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { E6CreateComponent } from './E6-create/E6-create.component';
import { E6DetailComponent } from './E6-detail/E6-detail.component';
import { E6ListComponent } from './E6-list/E6-list.component';
import { ModalModule, BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap';
import { AppShareModule } from '../share.module';
import { StudentsModule } from '../student/student.module';
import { JurysModule } from '../jury/jury.module';
import { E6sRoutingModule } from './E6.routing';
import { E6Service } from './services/E6.service';



@NgModule({
  imports: [AppShareModule,
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            E6sRoutingModule,
            StudentsModule,
            BsDatepickerModule.forRoot(),
            JurysModule,
            ModalModule.forRoot()
            ],
  declarations: [
    E6CreateComponent,
    E6DetailComponent,
    E6ListComponent,
    E6ModalComponent,
  ],
  providers: [E6Service],
  entryComponents: [E6ModalComponent],
  exports: [DatepickerModule],
})
export class E6sModule {}
