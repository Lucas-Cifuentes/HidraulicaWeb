import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NuevoTrabajoService {
  constructor() {}

  NuevoTrabajo = {
    Titulo: '',
    Descripcion: '',
    Imagen: '',
  };
}
