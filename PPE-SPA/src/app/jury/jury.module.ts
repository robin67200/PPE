import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SimpleModalService, SimpleModalModule } from 'ngx-simple-modal';

import { JuryCreateComponent } from './jury-create/jury-create.component';
import { JuryEditComponent } from './jury-edit/jury-edit.component';
import { JuryDetailComponent } from './jury-detail/jury-detail.component';
import { JuryListComponent } from './jury-list/jury-list.component';
import { JuryModalsComponent } from './jury-modals/jury-modals.component';
import { JurysRoutingModule } from './jury.routing';
import { JuryService } from './services/jury.service';
import { appShareModule } from '../share.module';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            JurysRoutingModule,
            appShareModule,
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
    JuryCreateComponent,
    JuryListComponent,
    JuryDetailComponent,
    JuryEditComponent,
    JuryModalsComponent,
  ],
  providers: [JuryService, SimpleModalService], entryComponents: [JuryModalsComponent]
})
export class JurysModule {}
