import { StudentCreateComponent } from './student/student-create/student-create.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentListComponent } from './student/student-list/student-list.component';

import { JuryCreateComponent } from './jury/jury-create/jury-create.component';
import { JuryEditComponent } from './jury/jury-edit/jury-edit.component';
import { JuryDetailComponent } from './jury/jury-detail/jury-detail.component';
import { JuryListComponent } from './jury/jury-list/jury-list.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
  {path: 'students/create', component: StudentCreateComponent},
  {path: 'students/detail/:id', component: StudentDetailComponent},
  {path: 'students/edit/:id', component: StudentEditComponent},
  {path: 'students', component: StudentListComponent},

  {path: 'jurys', component: JuryListComponent},
  {path: 'jurys/create', component: JuryCreateComponent},
  {path: 'jurys/detail/:id', component: JuryDetailComponent},
  {path: 'jurys/edit/:id', component: JuryEditComponent},
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
