import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-trabajos',
  templateUrl: './agregar-trabajos.component.html',
  styleUrls: ['./agregar-trabajos.component.scss'],
})
export class AgregarTrabajosComponent implements OnInit {
  constructor() {}

  nuevoTrabajo = {
    Titulo: '',
    Descripcion: '',
    Imagen: '',
  };

  ngOnInit(): void {}

  tituloTrabajo(titulo) {
    this.nuevoTrabajo.Titulo = titulo;
    console.log(this.nuevoTrabajo);
  }

  descripcionTrabajo(descripcion) {
    this.nuevoTrabajo.Descripcion = descripcion;
    console.log(this.nuevoTrabajo);
  }
}
