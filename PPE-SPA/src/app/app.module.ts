import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TabsModule} from 'ngx-tabset';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BsDropdownModule, BsDatepickerModule, ModalModule} from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { StudentService } from './student/services/student.service';
import { JuryService } from './jury/services/jury.service';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { SuccessComponent } from './success/success.component';
import { UserService } from './user/_services/user.service';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { HasRoleDirective } from './_directives/hasRole.directive';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { AdminService } from './_services/admin.service';
import { RolesModalComponent } from './admin/roles-modal/roles-modal.component';
import { AppShareModule } from './share.module';

export function tokenGetter() {
   return localStorage.getItem('token');
}

const appRoutes: Routes = [
   {
     path: '',
     children: [
       {
         path: 'students',
         loadChildren: './student/student.module#StudentsModule',
         canActivate: [AuthGuard],
         data: {animation: 'StudentsPage'}
       },
       {
          path: 'jurys',
          loadChildren: './jury/jury.module#JurysModule',
          canActivate: [AuthGuard],
          data: {animation: 'JurysPage'}
       },
       {
         path: 'members',
         loadChildren: './user/member.module#MembersModule',
         canActivate: [AuthGuard],
         data: {animation: 'MembersPage'}
      },
      {
         path: 'admin',
         component: AdminPanelComponent,
         data: {roles: ['Admin', 'Moderator'], animation: 'IsAdmin'}
      }
     ]
   },
   {path: 'home', component: HomeComponent, data: {animation: 'IsHome'} },
   {path: 'registers', component: RegisterComponent, data: {animation: 'IsRegister'} },
   {path: 'user-management', component: UserManagementComponent, data: {animation : 'IsUserMana'} },
   {path: 'success', component: SuccessComponent },
   {path: '**', redirectTo: 'home', pathMatch: 'full'},


 ];

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      SuccessComponent,
      AdminPanelComponent,
      UserManagementComponent,
      RolesModalComponent,
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
     // BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes),
      ReactiveFormsModule,
      FormsModule,
      ReactiveFormsModule,
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      NgbModule,
      TabsModule.forRoot(),
      ModalModule.forRoot(),
      BrowserModule,
      AppShareModule
      //BrowserAnimationsModule
   ],
   providers: [
      JuryService,
      StudentService,
      AuthService,
      AuthGuard,
      UserService,
      AdminService
   ],
   entryComponents: [
      RolesModalComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
