import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.scss'],
})
export class VerProductosComponent implements OnInit {
  ListaProductos: any[] = new Array<any>();
  cargando: boolean = true;

  constructor(private db: AngularFirestore) {}
  filterCodigo = '';
  producto: any;

  listaVender: any[] = new Array<any>();

  ngOnInit() {
    this.ListaProductos.length = 0;
    this.db
      .collection('Productos')
      .get()
      .subscribe((result) => {
        this.cargando = false;
        result.forEach((item) => {
          this.producto = item.data();
          this.producto.id = item.id;
          this.ListaProductos.push(this.producto);
        });
      });
  }

  addToList(producto) {
    this.listaVender.push(producto);
    console.log(this.listaVender);
  }
}
