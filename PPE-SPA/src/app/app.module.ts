import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { AppComponent } from './app.component';
import { StudentComponent } from './Student/Student.component';
import { StudentComponent } from './student/student.component';
=======
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { JuryComponent } from './jury/jury.component';
import { StudentComponent } from './student/student.component';
import { NoteComponent } from './note/note.component';
import { CritereComponent } from './critere/critere.component';
import { PhaseComponent } from './phase/phase.component';

const appRoutes: Routes = [
   {
     path: '',
     children: [
       {
         path: 'jobs',
         loadChildren: './Job/jobs.module#JobsModule'
       }
     ]
   },
   {path: 'nav', component: NavComponent},
 ];
>>>>>>> 5f084637a956c76d98ecd5aa527c69bb94993b95

@NgModule({
   declarations: [
      AppComponent,
<<<<<<< HEAD
      StudentComponent,
      StudentComponent
=======
      NavComponent,
      EvaluationComponent,
      JuryComponent,
      StudentComponent,
      NoteComponent,
      CritereComponent,
      PhaseComponent
>>>>>>> 5f084637a956c76d98ecd5aa527c69bb94993b95
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
