import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss'],
})
export class LoginAdminComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  Login() {
    this.auth
      .signInWithEmailAndPassword(
        this.formulario.value.email,
        this.formulario.value.password
      )
      .then((user) => {
        console.log(user);
      });
  }
}
