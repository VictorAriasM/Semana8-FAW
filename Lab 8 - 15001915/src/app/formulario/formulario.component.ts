import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MascotaService } from '../mascota.service';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatFormField,
    MatButtonModule,
    MatRadioModule,
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  nombre: string = '';
  raza: string = '';

  constructor(
    public dialog: MatDialog,
    private mascotaService: MascotaService
  ) {}

  submitForm() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        message: '¿Estás seguro que quieres agregar la mascota?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.mascotaService.agregarMascota({
          nombre: this.nombre,
          raza: this.raza,
        });
        this.nombre = '';
        this.raza = '';
      }
    });
  }
}
