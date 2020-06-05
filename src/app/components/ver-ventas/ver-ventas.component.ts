import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-ver-ventas',
  templateUrl: './ver-ventas.component.html',
  styleUrls: ['./ver-ventas.component.scss'],
})
export class VerVentasComponent implements OnInit {
  constructor(private db: AngularFirestore) {}

  listaVentas: any;

  productosVendidos: any[] = new Array<any>();

  ngOnInit() {
    // this.db
    //   .collection('Historial de Ventas')
    //   .valueChanges()
    //   .subscribe((ventas) => {
    //     //no se como pero funciona
    //     for (let venta of ventas) {
    //       let skere = Object.values(venta);
    //       skere.map((item) => {
    //         item.map((asd) => {
    //           this.productosVendidos.push(asd.Codigo);
    //           console.log(this.productosVendidos);
    //         });
    //       });
    //     }
    //   });
  }

  f = new Date();

  fecha = `${this.f.getDate()} / ${
    this.f.getMonth() + 1
  } / ${this.f.getFullYear()}`;

  precio = 1000;
}
