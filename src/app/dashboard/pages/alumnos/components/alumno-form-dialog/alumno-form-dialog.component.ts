import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { noHomeroValidator } from 'src/app/shared/utils/form-validators';
import { Alumno } from '../../interface/alumno.interface';

@Component({
  selector: 'app-alumno-form-dialog',
  templateUrl: './alumno-form-dialog.component.html',
  styleUrls: ['./alumno-form-dialog.component.scss'],
})
export class AlumnoFormDialogComponent {
  nombreControl = new FormControl<string | null>(null, [
    Validators.required,
    Validators.minLength(2),
    noHomeroValidator(),
  ]);

  apellidoControl = new FormControl<string | null>(null, [Validators.required]);
  dniControl = new FormControl<Number | null>(null, [Validators.required]);
  cursoControl = new FormControl<string | null>(null, [Validators.required]);
  parcial_1Control = new FormControl<Number | null>(null, [Validators.required,Validators.min(1),Validators.max(10)]);
  parcial_2Control = new FormControl<Number | null>(null, [Validators.required,Validators.min(1),Validators.max(10)]);
  nota_finalControl = new FormControl<Number | null>(null, [Validators.min(1),Validators.max(10)]);

  alumnoForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    dni: this.dniControl,
    curso: this.cursoControl,
    parcial_1: this.parcial_1Control,
    parcial_2: this.parcial_2Control,
    nota_final: this.nota_finalControl,
  });

  constructor(
    private dialogRef: MatDialogRef<AlumnoFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: Alumno
  ) {
    if (this.data) {
      this.nombreControl.setValue(this.data.nombre);
      this.apellidoControl.setValue(this.data.apellido);
      this.cursoControl.setValue(this.data.curso);
      this.dniControl.setValue(this.data.dni);
      this.parcial_1Control.setValue(this.data.parcial_1);
      this.parcial_2Control.setValue(this.data.parcial_2);
      this.nota_finalControl.setValue(this.data.nota_final);
    }
  }

  onSubmit(): void {
    if (this.alumnoForm.invalid) {
      this.alumnoForm.markAllAsTouched();
    } else {
      this.dialogRef.close(this.alumnoForm.value);
    }
  }
}
