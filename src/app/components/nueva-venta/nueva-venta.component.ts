import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-nueva-venta',
  templateUrl: './nueva-venta.component.html',
  styleUrls: ['./nueva-venta.component.scss'],
})
export class NuevaVentaComponent implements OnInit {
  constructor(private db: AngularFirestore, private ventas: VentasService) {}

  ListaVender = this.ventas.listaVenta;

  ngOnInit() {}

  nuevaVenta = {
    Productos: [],
  };

  agregarVenta() {
    if (this.ListaVender.length > 0) {
      for (let producto of this.ListaVender) {
        this.nuevaVenta.Productos.push(producto);
      }
      this.db
        .collection('Historial de Ventas')
        .add(this.nuevaVenta)
        .then(() => {
          console.log('Venta Creada');
        });
    } else {
      console.log('La lista de Venta esta vacía');
    }
  }
}
