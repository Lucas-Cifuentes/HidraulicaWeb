import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { VerProductosComponent } from './components/ver-productos/ver-productos.component';
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';
import { NuevaVentaComponent } from './components/nueva-venta/nueva-venta.component';
import { VerVentasComponent } from './components/ver-ventas/ver-ventas.component';
import { DetallesVentaComponent } from './components/detalles-venta/detalles-venta.component';
import { AgregarTrabajosComponent } from './components/agregar-trabajos/agregar-trabajos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  // ------------------------ Admin Views
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'ver-productos',
    component: VerProductosComponent,
  },
  {
    path: 'nuevo-producto',
    component: NuevoProductoComponent,
  },
  {
    path: 'nueva-venta',
    component: NuevaVentaComponent,
  },
  {
    path: 'ver-ventas',
    component: VerVentasComponent,
  },
  {
    path: 'detalles-venta',
    component: DetallesVentaComponent,
  },
  {
    path: 'agregar-trabajos',
    component: AgregarTrabajosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
