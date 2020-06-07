import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-agregar-trabajos',
  templateUrl: './agregar-trabajos.component.html',
  styleUrls: ['./agregar-trabajos.component.scss'],
})
export class AgregarTrabajosComponent implements OnInit {
  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) {}

  ngOnInit() {}

  agregarTrabajo = {
    Titulo: '',
    Descripcion: '',
    Imagen: '',
  };

  tituloTrabajo(titulo) {
    this.agregarTrabajo.Titulo = titulo;
  }

  descripcionTrabajo(descripcion) {
    this.agregarTrabajo.Descripcion = descripcion;
  }

  subirImagen(evento) {
    let imagen = evento.target.files[0];
    let nombre = evento.target.files[0].name;
    let ruta = `Imagenes/${nombre}`;
    const ref = this.storage.ref(ruta);
    const subir = ref.put(imagen);
    subir.then(() => {
      console.log('imagen subida');
      ref.getDownloadURL().subscribe((url) => {
        this.agregarTrabajo.Imagen = url;
      });
    });
  }

  enviarNuevoTrabajo() {
    this.db
      .collection('Trabajos Realizados')
      .add(this.agregarTrabajo)
      .then(() => {
        console.log('Trabajo Enviado');
      });
  }
}
