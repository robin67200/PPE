import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SimpleModalService, SimpleModalModule } from 'ngx-simple-modal';
import { UserService } from './_services/user.service';
import { MemberListComponent } from './member-list/member-list.component';
import { MembersRoutingModule } from './member.routing';



@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            MembersRoutingModule
           ],
  declarations: [
    MemberListComponent,
  ],
  providers: [UserService]
})
export class MembersModule {}
