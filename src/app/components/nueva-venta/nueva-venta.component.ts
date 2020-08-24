import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { VentasService } from 'src/app/services/ventas.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-venta',
  templateUrl: './nueva-venta.component.html',
  styleUrls: ['./nueva-venta.component.scss'],
})
export class NuevaVentaComponent implements OnInit {
  constructor(
    private db: AngularFirestore,
    private ventas: VentasService,
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  ListaVender = this.ventas.listaVenta;
  usuario: User;
  cargando = true;
  Succes = false;
  dia = new Date().getDate();
  mes = new Date().getMonth() + 1;
  anio = new Date().getUTCFullYear();

  fecha = `${this.dia}/${this.mes}/${this.anio}`;

  ngOnInit() {
    this.auth.user.subscribe((user) => {
      this.cargando = false;
      this.usuario = user;
    });
  }

  nuevaVenta = {
    Productos: [],
    Importe: 0,
    Fecha: this.fecha,
  };

  Importe(importe: number) {
    this.nuevaVenta.Importe = importe;
  }

  agregarVenta() {
    if (this.ListaVender.length > 0) {
      for (let producto of this.ListaVender) {
        this.nuevaVenta.Productos.push(producto);
      }
      this.db
        .collection('Historial de Ventas')
        .add(this.nuevaVenta)
        .then(() => {
          this.Succes = true;
          setTimeout(() => {
            this.router.navigate(['/ver-productos']);
          }, 3000);
        });
    } else {
      console.log('La lista de Venta esta vacía');
    }
  }
}
