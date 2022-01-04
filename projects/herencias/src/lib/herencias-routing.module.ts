import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarHerenciaComponent } from './agregar-herencia/agregar-herencia.component';
import { ConsultarHerenciaComponent } from './consultar-herencia/consultar-herencia.component';
import { EliminarHerenciaComponent } from './eliminar-herencia/eliminar-herencia.component';
import { EditarHerenciaComponent } from './editar-herencia/editar-herencia.component';

const routes: Routes = [
  {path: 'add-herencia/:id', component:   AgregarHerenciaComponent},
  {path: 'del-herencia/:id', component:   EliminarHerenciaComponent},
  {path: 'query-herencia/:id', component: ConsultarHerenciaComponent},
  {path: 'edit-herencia/:id', component:  EditarHerenciaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HerenciasRoutingModule { }
