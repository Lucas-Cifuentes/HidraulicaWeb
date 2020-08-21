import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-ver-ventas',
  templateUrl: './ver-ventas.component.html',
  styleUrls: ['./ver-ventas.component.scss'],
})
export class VerVentasComponent implements OnInit {
  constructor(private db: AngularFirestore, private auth: AngularFireAuth) {}

  listaVentas: any;

  productosVendidos: any[] = new Array<any>();

  usuario: User;
  cargando = true;

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
    this.auth.user.subscribe((user) => {
      this.cargando = false;
      this.usuario = user;
    });
  }

  f = new Date();

  fecha = `${this.f.getDate()} / ${
    this.f.getMonth() + 1
  } / ${this.f.getFullYear()}`;

  precio = 1000;
}
