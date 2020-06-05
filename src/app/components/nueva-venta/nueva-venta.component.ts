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
  constructor(
    private activeRoute: ActivatedRoute,
    private db: AngularFirestore,
    private ventas: VentasService
  ) {}

  Producto = {
    Codigo: '',
    Descripcion: '',
    Tipo: '',
  };

  ListaVender = this.ventas.listaVenta;

  ngOnInit() {}
}
