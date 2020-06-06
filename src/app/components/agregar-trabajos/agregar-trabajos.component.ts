import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NuevoTrabajoService } from 'src/app/services/nuevo-trabajo.service';

@Component({
  selector: 'app-agregar-trabajos',
  templateUrl: './agregar-trabajos.component.html',
  styleUrls: ['./agregar-trabajos.component.scss'],
})
export class AgregarTrabajosComponent implements OnInit {
  constructor(
    private storage: AngularFireStorage,
    private trabajoService: NuevoTrabajoService
  ) {}

  ngOnInit() {}

  tituloTrabajo(titulo) {
    this.trabajoService.NuevoTrabajo.Titulo = titulo;
    console.log(this.trabajoService.NuevoTrabajo);
  }

  descripcionTrabajo(descripcion) {
    this.trabajoService.NuevoTrabajo.Descripcion = descripcion;
    console.log(this.trabajoService.NuevoTrabajo);
  }

  subirImagen(evento) {
    let imagen = evento.target.files[0];
    let nombre = evento.target.files[0].name;
    let ruta = `Imagenes/${nombre}`;
    const ref = this.storage.ref(ruta);
    console.log(ruta);
    const subir = ref.put(imagen);
    subir.then(() => {
      console.log('imagen subida');
    });
  }
}
