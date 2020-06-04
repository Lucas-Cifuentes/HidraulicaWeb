import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselEmpresasComponent } from './components/carousel-empresas/carousel-empresas.component';
import { AdminComponent } from './components/admin/admin.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoadingComponent } from './components/loading/loading.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

import { ReactiveFormsModule } from '@angular/forms';
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';
import { VerProductosComponent } from './components/ver-productos/ver-productos.component';
import { TodosLosProductosComponent } from './components/todos-los-productos/todos-los-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    CarouselEmpresasComponent,
    AdminComponent,
    NosotrosComponent,
    LoginAdminComponent,
    LoadingComponent,
    NuevoProductoComponent,
    VerProductosComponent,
    TodosLosProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
