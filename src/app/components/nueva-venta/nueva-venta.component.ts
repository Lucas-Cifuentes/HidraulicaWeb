import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nueva-venta',
  templateUrl: './nueva-venta.component.html',
  styleUrls: ['./nueva-venta.component.scss'],
})
export class NuevaVentaComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private db: AngularFirestore
  ) {}

  Producto = {
    Codigo: '',
    Descripcion: '',
    Tipo: '',
  };

  ngOnInit() {
    let id = this.activeRoute.snapshot.params.id;
    this.db
      .doc<any>('Productos' + '/' + id)
      .valueChanges()
      .subscribe((producto) => {
        this.Producto.Codigo = producto.Codigo;
        this.Producto.Descripcion = producto.Descripcion;
        this.Producto.Tipo = producto.Tipo;
      });
  }
}
