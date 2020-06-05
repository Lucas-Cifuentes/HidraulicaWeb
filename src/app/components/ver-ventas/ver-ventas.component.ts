import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-ventas',
  templateUrl: './ver-ventas.component.html',
  styleUrls: ['./ver-ventas.component.scss'],
})
export class VerVentasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  f = new Date();

  fecha = `${this.f.getDate()} / ${
    this.f.getMonth() + 1
  } / ${this.f.getFullYear()}`;
}
