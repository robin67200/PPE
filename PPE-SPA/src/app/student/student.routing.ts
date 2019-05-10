import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentModalsComponent } from './student-modals/student-modals.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentCreateComponent } from './student-create/student-create.component';

export const routes: Routes = [
{
path: '',
redirectTo: 'list',
},
{path: 'create', component: StudentCreateComponent},
{path: 'detail/:id', component: StudentDetailComponent},
{path: 'edit/:id', component: StudentEditComponent},
{path: 'list', component: StudentListComponent },
{path: 'detail/:id/delete/:id', component: StudentModalsComponent},

];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class StudentsRoutingModule {}
