import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { VentasService } from 'src/app/services/ventas.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.scss'],
})
export class VerProductosComponent implements OnInit {
  ListaProductos: any[] = new Array<any>();
  cargando: boolean = true;

  constructor(
    private db: AngularFirestore,
    private ventas: VentasService,
    private router: Router,
    private auth: AngularFireAuth
  ) {}
  filterCodigo = '';
  producto: any;

  listaVender: any[] = new Array<any>();

  usuario: User;

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

    this.auth.user.subscribe((user) => {
      this.usuario = user;
    });
  }

  addToList(producto) {
    this.listaVender.push(producto);
  }

  borrarProducto(id) {
    let index = -1;
    this.listaVender.filter(function (producto, i) {
      if (producto.id === id) {
        index = i;
      }
    });
    this.listaVender.splice(index, 1);
  }

  venderProductos() {
    if (this.listaVender.length > 0) {
      this.ventas.listaVenta = this.listaVender;
      // console.log(this.ventas);
      this.router.navigate(['/nueva-venta']);
    } else {
      console.log('Lista de ventas vacia');
    }
  }
}
