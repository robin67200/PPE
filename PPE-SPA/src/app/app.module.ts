import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { StudentService } from './student/services/student.service';
import { JuryService } from './jury/services/jury.service';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { SuccessComponent } from './success/success.component';


const appRoutes: Routes = [
   {
     path: '',
     children: [
       {
         path: 'students',
         loadChildren: './student/student.module#StudentsModule',
         canActivate: [AuthGuard]
       },
       {
          path: 'jurys',
          loadChildren: './jury/jury.module#JurysModule',
          canActivate: [AuthGuard]
       },
     ]
   },
   {path: 'home', component: HomeComponent },
   {path: 'registers', component: RegisterComponent },
   {path: 'success', component: SuccessComponent },
   {path: '**', redirectTo: 'home', pathMatch: 'full'},
 ];

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      SuccessComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      ReactiveFormsModule,
      FormsModule,
      ReactiveFormsModule,
      BsDropdownModule.forRoot()
   ],
   providers: [
      JuryService,
      StudentService,
      AuthService,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
