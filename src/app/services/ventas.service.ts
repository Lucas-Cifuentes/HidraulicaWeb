import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VentasService {
  constructor() {}
  listaVenta: any[] = new Array<any>();
}
