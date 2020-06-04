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

  ngOnInit() {
    this.db
      .collection('Productos')
      .valueChanges()
      .subscribe((result) => {
        this.cargando = false;
        this.ListaProductos = result;
      });
  }
}
