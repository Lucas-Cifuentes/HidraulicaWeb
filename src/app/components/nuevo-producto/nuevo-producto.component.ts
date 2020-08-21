import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss'],
})
export class NuevoProductoComponent implements OnInit {
  nuevoProducto = {
    Codigo: '',
    Descripcion: '',
    Tipo: '',
  };

  constructor(private db: AngularFirestore, private auth: AngularFireAuth) {}

  usuario: User;
  cargando = true;

  ngOnInit() {
    this.auth.user.subscribe((user) => {
      this.usuario = user;
      this.cargando = false;
    });
  }

  codigoProducto(codigo) {
    this.nuevoProducto.Codigo = codigo.toUpperCase();
  }

  descripcionCodigo(descripcion) {
    this.nuevoProducto.Descripcion = descripcion.toUpperCase();
  }

  tipoProducto(tipo) {
    this.nuevoProducto.Tipo = tipo.toUpperCase();
  }

  agregar() {
    this.db
      .collection('Productos')
      .add(this.nuevoProducto)
      .then(() => {
        console.log('Producto Agregado');
      });
  }
}
