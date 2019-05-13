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


const appRoutes: Routes = [
   {
     path: '',
     children: [
       {
         path: 'students',
         loadChildren: './student/student.module#StudentsModule',
       },
       {
          path: 'jurys',
          loadChildren: './jury/jury.module#JurysModule',
       },
     ]
   },
   {path: 'nav', component: NavComponent},
 ];

@NgModule({
   declarations: [
      AppComponent,
      NavComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      ReactiveFormsModule,
      FormsModule,
      BsDropdownModule.forRoot()
   ],
   providers: [JuryService, StudentService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
