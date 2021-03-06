import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GridDetailComponent } from './grid-detail/grid-detail.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { GridCreateComponent } from './grid-create/grid-create.component';
import { ModalModule, DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap';
import { AppShareModule } from '../share.module';
import { GridsRoutingModule } from './grid.routing';
import { GridService } from './service/grid.service';
import { StudentsModule } from '../student/student.module';
import { GridModalComponent } from './grid-modal/grid-modal.component';
import { JurysModule } from '../jury/jury.module';
import { ExportAsModule } from 'ngx-export-as';

@NgModule({
  imports: [AppShareModule,
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            GridsRoutingModule,
            StudentsModule,
            JurysModule,
            ModalModule.forRoot(),
            BsDatepickerModule.forRoot(),
            ExportAsModule
            ],
  declarations: [
    GridCreateComponent,
    GridDetailComponent,
    GridListComponent,
    GridModalComponent,
  ],
  providers: [GridService],
  entryComponents: [GridModalComponent],
  exports: [DatepickerModule],
})
export class GridsModule {}
