import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  usuario: User;
  cargando: boolean = true;
  constructor(private auth: AngularFireAuth, private router: Router) {
    this.auth.user.subscribe((user) => {
      this.cargando = false;
      this.usuario = user;
    });
  }

  ngOnInit() {}

  Logout() {
    this.auth.signOut();
    this.router.navigate(['/']);
  }
}
