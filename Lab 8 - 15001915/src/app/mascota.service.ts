import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Mascota {
  nombre: string;
  raza: string;
}

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  private _mascotas: BehaviorSubject<Mascota[]> = new BehaviorSubject<
    Mascota[]
  >([]);
  public mascotas$ = this._mascotas.asObservable();

  constructor() {}

  public agregarMascota(mascota: Mascota) {
    const mascotas = this._mascotas.getValue();
    mascotas.push(mascota);
    this._mascotas.next(mascotas);
  }

  public obtenerMascotas() {
    return this._mascotas.getValue();
  }
}
