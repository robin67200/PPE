import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GridDetailComponent } from './grid-detail/grid-detail.component';
import { GridEditComponent } from './grid-edit/grid-edit.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { GridCreateComponent } from './grid-create/grid-create.component';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { AppShareModule } from '../share.module';
import { GridsRoutingModule } from './grid.routing';
import { GridService } from './service/grid.service';
import { StudentsModule } from '../student/student.module';
import { GridModalComponent } from './grid-modal/grid-modal.component';
import { JurysModule } from '../jury/jury.module';
import { NoteSelectComponent } from './components/note-select/note-select.component';





@NgModule({
  imports: [AppShareModule,
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            GridsRoutingModule,
            StudentsModule,
            JurysModule,
            ModalModule.forRoot(),
            BsDatepickerModule.forRoot()
            ],
  declarations: [
    GridCreateComponent,
    GridDetailComponent,
    GridEditComponent,
    GridListComponent,
    GridModalComponent,
    NoteSelectComponent
  ],
  providers: [GridService],
  entryComponents: [GridModalComponent],
  exports: [NoteSelectComponent],
})
export class GridsModule {}
