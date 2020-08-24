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

  listaVentas: any[] = new Array<any>();

  usuario: User;
  cargando = true;

  ngOnInit() {
    this.db
      .collection('Historial de Ventas')
      .get()
      .subscribe((result) => {
        result.forEach((item) => {
          this.listaVentas.push(item.data());
          this.cargando = false;
        });
      });
    this.auth.user.subscribe((user) => {
      this.usuario = user;
    });
  }
}
