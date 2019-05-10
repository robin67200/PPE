import { StudentCreateComponent } from './student/student-create/student-create.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {path: 'students/create', component: StudentCreateComponent},
  {path: 'students/detail/:id', component: StudentDetailComponent},
  {path: 'students/edit/:id', component: StudentEditComponent},
  {path: 'students', component: StudentListComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
