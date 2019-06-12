import { HasRoleDirective } from './_directives/hasRole.directive';
import { NgModule } from '@angular/core';
import { StudentsModule } from './student/student.module';
import { JurysModule } from './jury/jury.module';

@NgModule({
    declarations: [HasRoleDirective],
    exports: [HasRoleDirective],
    imports: [
    ]
})
export class AppShareModule {}
