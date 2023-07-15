import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoFormDialogComponent } from './components/alumno-form-dialog/alumno-form-dialog.component';
import { Alumno } from './models';

const ELEMENT_DATA: Alumno[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      dni: 12345678,
      curso: 'Ingeniería',
      parcial_1: 8,
      parcial_2: 7,
      nota_final: 9
    },
    {
      id: 2,
      nombre: 'María',
      apellido: 'González',
      dni: 87654321,
      curso: 'Arquitectura',
      parcial_1: 6,
      parcial_2: 2,
      nota_final: 0
    },
    {
      id: 3,
      nombre: 'Carlos',
      apellido: 'López',
      dni: 56789012,
      curso: 'Medicina',
      parcial_1: 9,
      parcial_2: 8,
      nota_final: 10
    },
    {
      id: 4,
      nombre: 'Ana',
      apellido: 'Rodríguez',
      dni: 65432109,
      curso: 'Derecho',
      parcial_1: 7,
      parcial_2: 6,
      nota_final: 8
    },
    {
      id: 5,
      nombre: 'Pedro',
      apellido: 'Martínez',
      dni: 43210987,
      curso: 'Economía',
      parcial_1: 5,
      parcial_2: 5,
      nota_final: 6
    },
    {
      id: 6,
      nombre: 'Laura',
      apellido: 'López',
      dni: 98765432,
      curso: 'Ingeniería',
      parcial_1: 9,
      parcial_2: 7,
      nota_final: 2
    },
    {
      id: 7,
      nombre: 'Miguel',
      apellido: 'Gómez',
      dni: 21098765,
      curso: 'Medicina',
      parcial_1: 8,
      parcial_2: 9,
      nota_final: 3
    },
    {
      id: 8,
      nombre: 'Sofía',
      apellido: 'Fernández',
      dni: 89012345,
      curso: 'Derecho',
      parcial_1: 7,
      parcial_2: 6,
      nota_final: 8
    },
    {
      id: 9,
      nombre: 'Diego',
      apellido: 'Torres',
      dni: 32109876,
      curso: 'Arquitectura',
      parcial_1: 9,
      parcial_2: 8,
      nota_final: 1
    },
    {
      id: 10,
      nombre: 'Carolina',
      apellido: 'Silva',
      dni: 678901,
      curso: 'Economía',
      parcial_1: 6,
      parcial_2: 7,
      nota_final: 8
    }
  
];
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
})
export class AlumnoComponent {
  public alumnos: Alumno[] = ELEMENT_DATA;

  public today = new Date();

  constructor(private matDialog: MatDialog) {
  }

  onCreateUser(): void {
    this.matDialog
      .open(AlumnoFormDialogComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (v) {
            if (v.parcial_1 < 4 && v.nota_final > 0 || v.parcial_2 < 4 && v.nota_final > 0) {
              alert("para ingresar la nota final debe estar los dos parciales aprobados")
            }else{
              this.alumnos = [
                ...this.alumnos,
                {
                  id: this.alumnos.length + 1,
                  nombre: v.nombre,
                  apellido: v.apellido,
                  dni: v.dni,
                  curso: v.curso,
                  parcial_1: v.parcial_1,
                  parcial_2: v.parcial_2,
                  nota_final: v.nota_final,
                },
              ];
            }
          } else {
          }
        },
      });
  }

  onDeleteAlumno(alumnoToDelete: Alumno): void {
    if (confirm(`¿Está seguro de eliminar a ${alumnoToDelete.nombre}?`)) {
      this.alumnos = this.alumnos.filter((u) => u.id !== alumnoToDelete.id);
    }
  }

  onEditAlumno(alumnoToEdit: Alumno): void {
    this.matDialog
    .open(AlumnoFormDialogComponent, {
      data: alumnoToEdit
    })
    .afterClosed()
    .subscribe({
      next: (alumnoUpdated) => {
        if (alumnoUpdated) {
          if (alumnoUpdated.parcial_1 < 4 && alumnoUpdated.nota_final > 0 || alumnoUpdated.parcial_2 < 4 && alumnoUpdated.nota_final > 0) {
            alert("para ingresar la nota final debe estar los dos parciales aprobados")
        }else{
          this.alumnos = this.alumnos.map((alumno) => {
            return alumno.id === alumnoToEdit.id
              ? { ...alumno, ...alumnoUpdated }
              : alumno 
          })
        }
        }
      },
    });
  }
}
