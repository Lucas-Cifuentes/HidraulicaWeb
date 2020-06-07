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

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';
import { VerProductosComponent } from './components/ver-productos/ver-productos.component';
import { SearchPipe } from './pipes/search.pipe';
import { NuevaVentaComponent } from './components/nueva-venta/nueva-venta.component';
import { VerVentasComponent } from './components/ver-ventas/ver-ventas.component';
import { VentasService } from './services/ventas.service';
import { DetallesVentaComponent } from './components/detalles-venta/detalles-venta.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { AgregarTrabajosComponent } from './components/agregar-trabajos/agregar-trabajos.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { TrabajosRealizadosComponent } from './components/trabajos-realizados/trabajos-realizados.component';
import { ProductosMostrarComponent } from './components/productos-mostrar/productos-mostrar.component';

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
    SearchPipe,
    NuevaVentaComponent,
    VerVentasComponent,
    DetallesVentaComponent,
    EditarProductoComponent,
    AgregarTrabajosComponent,
    TrabajosRealizadosComponent,
    ProductosMostrarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    FormsModule,
    AngularFireStorageModule,
  ],
  providers: [VentasService],
  bootstrap: [AppComponent],
})
export class AppModule {}
