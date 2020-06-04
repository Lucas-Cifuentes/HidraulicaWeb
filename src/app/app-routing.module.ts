import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { VerProductosComponent } from './components/ver-productos/ver-productos.component';
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
