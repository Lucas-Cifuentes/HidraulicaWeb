import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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

  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {}

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
