import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-detalles-venta',
  templateUrl: './detalles-venta.component.html',
  styleUrls: ['./detalles-venta.component.scss'],
})
export class DetallesVentaComponent implements OnInit {
  usuario: User;
  cargando = true;

  constructor(private auth: AngularFireAuth) {}

  ngOnInit() {
    this.auth.user.subscribe((user) => {
      this.cargando = false;
      this.usuario = user;
    });
  }
}
