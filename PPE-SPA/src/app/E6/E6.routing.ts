import { E6CreateComponent } from './E6-create/E6-create.component';
import { E6DetailComponent } from './E6-detail/E6-detail.component';
import { E6ListComponent } from './E6-list/E6-list.component';




import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
{
path: '',
redirectTo: 'list',
},
  {path: 'create', component: E6CreateComponent},
  {path: 'detail/:id', component: E6DetailComponent},
  {path: 'list', component: E6ListComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class E6sRoutingModule {}
