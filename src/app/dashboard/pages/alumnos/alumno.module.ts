import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoComponent } from './alumno.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlumnoFormDialogComponent } from './components/alumno-form-dialog/alumno-form-dialog.component';
import { AlumnoTableComponent } from './components/alumnos-table/alumno-table.component';



@NgModule({
  declarations: [
    AlumnoComponent,
    AlumnoFormDialogComponent,
    AlumnoTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    AlumnoComponent
  ]
})
export class AlumnoModule { }
