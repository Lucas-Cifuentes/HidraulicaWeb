import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-trabajos-realizados',
  templateUrl: './trabajos-realizados.component.html',
  styleUrls: ['./trabajos-realizados.component.scss'],
})
export class TrabajosRealizadosComponent implements OnInit {
  constructor(private db: AngularFirestore) {}

  ListaTrabajosRealizados = [];
  cargando = true;

  ngOnInit() {
    this.db
      .collection('Trabajos Realizados')
      .valueChanges()
      .subscribe((trabajos) => {
        this.ListaTrabajosRealizados = trabajos;
      });
  }
}
