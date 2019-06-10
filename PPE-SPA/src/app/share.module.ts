import { HasRoleDirective } from './_directives/hasRole.directive';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [HasRoleDirective],
    exports: [HasRoleDirective]
})
export class appShareModule{}