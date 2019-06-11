import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { JuryCreateComponent } from './jury-create/jury-create.component';
import { JuryEditComponent } from './jury-edit/jury-edit.component';
import { JuryDetailComponent } from './jury-detail/jury-detail.component';
import { JuryListComponent } from './jury-list/jury-list.component';
import { JuryModalsComponent } from './jury-modals/jury-modals.component';
import { JurysRoutingModule } from './jury.routing';
import { JuryService } from './services/jury.service';
import { AppShareModule } from '../share.module';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            JurysRoutingModule,
            AppShareModule,
            ModalModule.forRoot()
            ],
  declarations: [
    JuryCreateComponent,
    JuryListComponent,
    JuryDetailComponent,
    JuryEditComponent,
    JuryModalsComponent,
  ],
  providers: [JuryService],
  entryComponents: [JuryModalsComponent],
  exports: [JuryModalsComponent]
})
export class JurysModule {}
