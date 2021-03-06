import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-agregar-trabajos',
  templateUrl: './agregar-trabajos.component.html',
  styleUrls: ['./agregar-trabajos.component.scss'],
})
export class AgregarTrabajosComponent implements OnInit {
  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private auth: AngularFireAuth
  ) {}

  usuario: User;
  cargando = true;

  ngOnInit() {
    this.auth.user.subscribe((user) => {
      this.cargando = false;
      this.usuario = user;
    });
  }

  agregarTrabajo = {
    Titulo: '',
    Imagen: '',
  };

  tituloTrabajo(titulo:string) {
    this.agregarTrabajo.Titulo = titulo;
  }

  subirImagen(evento:any) {
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
