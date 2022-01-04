import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarNacimientoComponent } from './agregar-nacimiento/agregar-nacimiento.component';
import { ConsultarNacimientoComponent } from './consultar-nacimiento/consultar-nacimiento.component';
import { EliminarNacimientoComponent } from './eliminar-nacimiento/eliminar-nacimiento.component';
import { EditarNacimientoComponent } from './editar-nacimiento/editar-nacimiento.component';

const routes: Routes = [
  {path: 'add-nacimiento/:id', component:   AgregarNacimientoComponent},
  {path: 'del-nacimiento/:id', component:   EliminarNacimientoComponent},
  {path: 'query-nacimiento/:id', component: ConsultarNacimientoComponent},
  {path: 'edit-nacimiento/:id', component:  EditarNacimientoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NacimientosRoutingModule { }
