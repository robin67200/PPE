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
   { path: 'home', component: HomeComponent },
   // {path: '**', redirectTo: 'home', pathMatch: 'full'},
   { path: 'registers', component: RegisterComponent },
 ];

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      ReactiveFormsModule,
      FormsModule,
      BsDropdownModule.forRoot()
   ],
   providers: [
      JuryService,
      StudentService,
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
