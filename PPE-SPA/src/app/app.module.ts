import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      EvaluationComponent,
      JuryComponent,
      StudentComponent,
      NoteComponent,
      CritereComponent,
      PhaseComponent
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
