import { Routes, RouterModule } from '@angular/router';
import { JuryCreateComponent } from './jury-create/jury-create.component';
import { JuryEditComponent } from './jury-edit/jury-edit.component';
import { JuryDetailComponent } from './jury-detail/jury-detail.component';
import { JuryListComponent } from './jury-list/jury-list.component';
import { JuryModalsComponent } from './jury-modals/jury-modals.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
{
path: '',
redirectTo: 'list',
},
  {path: 'create', component: JuryCreateComponent},
  {path: 'detail/:id', component: JuryDetailComponent},
  {path: 'edit/:id', component: JuryEditComponent},
  {path: 'list', component: JuryListComponent},
  {path: 'detail/:id/delete/:id', component: JuryModalsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class JurysRoutingModule {}
