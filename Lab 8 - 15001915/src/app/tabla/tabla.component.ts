import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MascotaService } from '../mascota.service';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent implements OnInit {
  @Input() mascotas: any[] = [];
  columnas: string[] = ['nombre', 'raza'];

  constructor(private mascotaService: MascotaService) {}

  ngOnInit() {
    this.mascotaService.mascotas$.subscribe((mascotas) => {
      this.mascotas = mascotas;
    });
  }

  agregarMascota(mascota: any) {
    this.mascotas.push(mascota);
  }
}
