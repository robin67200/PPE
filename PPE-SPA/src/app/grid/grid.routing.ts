import { GridDetailComponent } from './grid-detail/grid-detail.component';
import { GridEditComponent } from './grid-edit/grid-edit.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { GridCreateComponent } from './grid-create/grid-create.component';



import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
{
path: '',
redirectTo: 'list',
},
  {path: 'create', component: GridCreateComponent},
  {path: 'detail/:id', component: GridDetailComponent},
  {path: 'edit/:id', component: GridEditComponent},
  {path: 'list', component: GridListComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class GridsRoutingModule {}
